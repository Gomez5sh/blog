import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Link } from "../../../models/Link";
import { Post } from "../../../models/Post";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Link)
export class LinkRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() link: Link,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .link.findUniqueOrThrow({
        where: {
          id: link.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
