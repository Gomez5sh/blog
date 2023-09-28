import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAnswerArgs } from "./args/CreateOneAnswerArgs";
import { Answer } from "../../../models/Answer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class CreateOneAnswerResolver {
  @TypeGraphQL.Mutation((_returns) => Answer, {
    nullable: false,
  })
  async createOneAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneAnswerArgs,
  ): Promise<Answer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
