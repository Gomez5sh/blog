import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAnswerArgs } from "./args/GroupByAnswerArgs";
import { Answer } from "../../../models/Answer";
import { AnswerGroupBy } from "../../outputs/AnswerGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class GroupByAnswerResolver {
  @TypeGraphQL.Query((_returns) => [AnswerGroupBy], {
    nullable: false,
  })
  async groupByAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAnswerArgs,
  ): Promise<AnswerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).answer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
