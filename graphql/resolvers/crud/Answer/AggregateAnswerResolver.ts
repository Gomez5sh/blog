import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAnswerArgs } from "./args/AggregateAnswerArgs";
import { Answer } from "../../../models/Answer";
import { AggregateAnswer } from "../../outputs/AggregateAnswer";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class AggregateAnswerResolver {
  @TypeGraphQL.Query((_returns) => AggregateAnswer, {
    nullable: false,
  })
  async aggregateAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAnswerArgs,
  ): Promise<AggregateAnswer> {
    return getPrismaFromContext(ctx).answer.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
