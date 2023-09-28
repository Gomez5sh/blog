import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneQuoteArgs } from "./args/UpsertOneQuoteArgs";
import { Quote } from "../../../models/Quote";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Quote)
export class UpsertOneQuoteResolver {
  @TypeGraphQL.Mutation((_returns) => Quote, {
    nullable: false,
  })
  async upsertOneQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneQuoteArgs,
  ): Promise<Quote> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
