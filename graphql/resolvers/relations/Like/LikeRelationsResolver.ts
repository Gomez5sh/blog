import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() like: Like,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .like.findUniqueOrThrow({
        where: {
          id: like.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async author(
    @TypeGraphQL.Root() like: Like,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .like.findUniqueOrThrow({
        where: {
          id: like.id,
        },
      })
      .author({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
