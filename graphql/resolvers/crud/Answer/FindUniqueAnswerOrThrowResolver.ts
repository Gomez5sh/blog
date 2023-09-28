import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAnswerOrThrowArgs } from "./args/FindUniqueAnswerOrThrowArgs";
import { Answer } from "../../../models/Answer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class FindUniqueAnswerOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Answer, {
    nullable: true,
  })
  async getAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAnswerOrThrowArgs,
  ): Promise<Answer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
