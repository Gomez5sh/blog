import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneQuoteArgs } from "./args/UpdateOneQuoteArgs";
import { Quote } from "../../../models/Quote";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Quote)
export class UpdateOneQuoteResolver {
  @TypeGraphQL.Mutation((_returns) => Quote, {
    nullable: true,
  })
  async updateOneQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneQuoteArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
