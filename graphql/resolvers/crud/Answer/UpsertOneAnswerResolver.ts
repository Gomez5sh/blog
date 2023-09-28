import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAnswerArgs } from "./args/UpsertOneAnswerArgs";
import { Answer } from "../../../models/Answer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class UpsertOneAnswerResolver {
  @TypeGraphQL.Mutation((_returns) => Answer, {
    nullable: false,
  })
  async upsertOneAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneAnswerArgs,
  ): Promise<Answer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
