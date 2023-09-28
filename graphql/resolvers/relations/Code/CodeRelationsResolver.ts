import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Code } from "../../../models/Code";
import { Post } from "../../../models/Post";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Code)
export class CodeRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() code: Code,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .code.findUniqueOrThrow({
        where: {
          id: code.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
