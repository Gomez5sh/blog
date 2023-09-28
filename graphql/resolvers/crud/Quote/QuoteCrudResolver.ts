import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateQuoteArgs } from "./args/AggregateQuoteArgs";
import { CreateManyQuoteArgs } from "./args/CreateManyQuoteArgs";
import { CreateOneQuoteArgs } from "./args/CreateOneQuoteArgs";
import { DeleteManyQuoteArgs } from "./args/DeleteManyQuoteArgs";
import { DeleteOneQuoteArgs } from "./args/DeleteOneQuoteArgs";
import { FindFirstQuoteArgs } from "./args/FindFirstQuoteArgs";
import { FindFirstQuoteOrThrowArgs } from "./args/FindFirstQuoteOrThrowArgs";
import { FindManyQuoteArgs } from "./args/FindManyQuoteArgs";
import { FindUniqueQuoteArgs } from "./args/FindUniqueQuoteArgs";
import { FindUniqueQuoteOrThrowArgs } from "./args/FindUniqueQuoteOrThrowArgs";
import { GroupByQuoteArgs } from "./args/GroupByQuoteArgs";
import { UpdateManyQuoteArgs } from "./args/UpdateManyQuoteArgs";
import { UpdateOneQuoteArgs } from "./args/UpdateOneQuoteArgs";
import { UpsertOneQuoteArgs } from "./args/UpsertOneQuoteArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Quote } from "../../../models/Quote";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateQuote } from "../../outputs/AggregateQuote";
import { QuoteGroupBy } from "../../outputs/QuoteGroupBy";

@TypeGraphQL.Resolver((_of) => Quote)
export class QuoteCrudResolver {
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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyQuoteArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyQuoteArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Quote, {
    nullable: true,
  })
  async deleteOneQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneQuoteArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Quote, {
    nullable: true,
  })
  async findFirstQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstQuoteArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Quote, {
    nullable: true,
  })
  async findFirstQuoteOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstQuoteOrThrowArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Quote], {
    nullable: false,
  })
  async quotes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyQuoteArgs,
  ): Promise<Quote[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Quote, {
    nullable: true,
  })
  async quote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueQuoteArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Quote, {
    nullable: true,
  })
  async getQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueQuoteOrThrowArgs,
  ): Promise<Quote | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyQuote(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyQuoteArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).quote.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
