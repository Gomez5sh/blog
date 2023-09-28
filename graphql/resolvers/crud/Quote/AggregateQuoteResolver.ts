import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateQuoteArgs } from "./args/AggregateQuoteArgs";
import { Quote } from "../../../models/Quote";
import { AggregateQuote } from "../../outputs/AggregateQuote";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Quote)
export class AggregateQuoteResolver {
  @TypeGraphQL.Query((_returns) => AggregateQuote, {
    nullable: false,
  })
  async aggregateQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateQuoteArgs,
  ): Promise<AggregateQuote> {
    return getPrismaFromContext(ctx).quote.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
