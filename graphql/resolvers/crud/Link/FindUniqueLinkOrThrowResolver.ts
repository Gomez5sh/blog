import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinkOrThrowArgs } from "./args/FindUniqueLinkOrThrowArgs";
import { Link } from "../../../models/Link";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Link)
export class FindUniqueLinkOrThrowResolver {
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
}
