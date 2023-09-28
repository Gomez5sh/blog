import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePollArgs } from "./args/AggregatePollArgs";
import { Poll } from "../../../models/Poll";
import { AggregatePoll } from "../../outputs/AggregatePoll";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Poll)
export class AggregatePollResolver {
  @TypeGraphQL.Query((_returns) => AggregatePoll, {
    nullable: false,
  })
  async aggregatePoll(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePollArgs,
  ): Promise<AggregatePoll> {
    return getPrismaFromContext(ctx).poll.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
