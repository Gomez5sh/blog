import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLinkArgs } from "./args/AggregateLinkArgs";
import { CreateManyLinkArgs } from "./args/CreateManyLinkArgs";
import { CreateOneLinkArgs } from "./args/CreateOneLinkArgs";
import { DeleteManyLinkArgs } from "./args/DeleteManyLinkArgs";
import { DeleteOneLinkArgs } from "./args/DeleteOneLinkArgs";
import { FindFirstLinkArgs } from "./args/FindFirstLinkArgs";
import { FindFirstLinkOrThrowArgs } from "./args/FindFirstLinkOrThrowArgs";
import { FindManyLinkArgs } from "./args/FindManyLinkArgs";
import { FindUniqueLinkArgs } from "./args/FindUniqueLinkArgs";
import { FindUniqueLinkOrThrowArgs } from "./args/FindUniqueLinkOrThrowArgs";
import { GroupByLinkArgs } from "./args/GroupByLinkArgs";
import { UpdateManyLinkArgs } from "./args/UpdateManyLinkArgs";
import { UpdateOneLinkArgs } from "./args/UpdateOneLinkArgs";
import { UpsertOneLinkArgs } from "./args/UpsertOneLinkArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Link } from "../../../models/Link";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLink } from "../../outputs/AggregateLink";
import { LinkGroupBy } from "../../outputs/LinkGroupBy";

@TypeGraphQL.Resolver((_of) => Link)
export class LinkCrudResolver {
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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyLinkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Link, {
    nullable: false,
  })
  async createOneLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneLinkArgs,
  ): Promise<Link> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyLinkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Link, {
    nullable: true,
  })
  async deleteOneLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneLinkArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Link, {
    nullable: true,
  })
  async findFirstLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstLinkArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Link, {
    nullable: true,
  })
  async findFirstLinkOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstLinkOrThrowArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Link], {
    nullable: false,
  })
  async links(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyLinkArgs,
  ): Promise<Link[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Link, {
    nullable: true,
  })
  async link(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueLinkArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Link, {
    nullable: true,
  })
  async getLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueLinkOrThrowArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [LinkGroupBy], {
    nullable: false,
  })
  async groupByLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByLinkArgs,
  ): Promise<LinkGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.groupBy({
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
  async updateManyLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyLinkArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Link, {
    nullable: true,
  })
  async updateOneLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneLinkArgs,
  ): Promise<Link | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Link, {
    nullable: false,
  })
  async upsertOneLink(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneLinkArgs,
  ): Promise<Link> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).link.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
