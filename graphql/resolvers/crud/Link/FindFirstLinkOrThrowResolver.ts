import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLinkOrThrowArgs } from "./args/FindFirstLinkOrThrowArgs";
import { Link } from "../../../models/Link";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Link)
export class FindFirstLinkOrThrowResolver {
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
}
