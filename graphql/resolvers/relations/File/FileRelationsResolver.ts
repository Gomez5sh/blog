import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { File } from "../../../models/File";
import { Post } from "../../../models/Post";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => File)
export class FileRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() file: File,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .file.findUniqueOrThrow({
        where: {
          id: file.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
