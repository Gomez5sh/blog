import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAnswerArgs } from "./args/FindFirstAnswerArgs";
import { Answer } from "../../../models/Answer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class FindFirstAnswerResolver {
  @TypeGraphQL.Query((_returns) => Answer, {
    nullable: true,
  })
  async findFirstAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAnswerArgs,
  ): Promise<Answer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
