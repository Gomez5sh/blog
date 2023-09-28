import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPollArgs } from "./args/GroupByPollArgs";
import { Poll } from "../../../models/Poll";
import { PollGroupBy } from "../../outputs/PollGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Poll)
export class GroupByPollResolver {
  @TypeGraphQL.Query((_returns) => [PollGroupBy], {
    nullable: false,
  })
  async groupByPoll(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByPollArgs,
  ): Promise<PollGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).poll.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
