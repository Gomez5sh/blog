import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneQuoteArgs } from "./args/CreateOneQuoteArgs";
import { Quote } from "../../../models/Quote";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Quote)
export class CreateOneQuoteResolver {
  @TypeGraphQL.Mutation((_returns) => Quote, {
    nullable: false,
  })
  async createOneQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneQuoteArgs,
  ): Promise<Quote> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
