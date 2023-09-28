import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLinkArgs } from "./args/AggregateLinkArgs";
import { Link } from "../../../models/Link";
import { AggregateLink } from "../../outputs/AggregateLink";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Link)
export class AggregateLinkResolver {
  @TypeGraphQL.Query((_returns) => AggregateLink, {
    nullable: false,
  })
  async aggregateLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateLinkArgs,
  ): Promise<AggregateLink> {
    return getPrismaFromContext(ctx).link.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
