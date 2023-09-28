import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Image } from "../../../models/Image";
import { Post } from "../../../models/Post";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Image)
export class ImageRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() image: Image,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .image.findUniqueOrThrow({
        where: {
          id: image.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
