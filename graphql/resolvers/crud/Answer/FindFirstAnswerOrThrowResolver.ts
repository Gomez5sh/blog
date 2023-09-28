import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAnswerOrThrowArgs } from "./args/FindFirstAnswerOrThrowArgs";
import { Answer } from "../../../models/Answer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class FindFirstAnswerOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Answer, {
    nullable: true,
  })
  async findFirstAnswerOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAnswerOrThrowArgs,
  ): Promise<Answer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
