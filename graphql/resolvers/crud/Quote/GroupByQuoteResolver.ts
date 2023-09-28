import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByQuoteArgs } from "./args/GroupByQuoteArgs";
import { Quote } from "../../../models/Quote";
import { QuoteGroupBy } from "../../outputs/QuoteGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Quote)
export class GroupByQuoteResolver {
  @TypeGraphQL.Query((_returns) => [QuoteGroupBy], {
    nullable: false,
  })
  async groupByQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByQuoteArgs,
  ): Promise<QuoteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
