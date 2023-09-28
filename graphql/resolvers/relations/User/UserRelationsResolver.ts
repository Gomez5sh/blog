import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Answer } from "../../../models/Answer";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { UserAnswersArgs } from "./args/UserAnswersArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserProfileArgs } from "./args/UserProfileArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserPostsArgs,
  ): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .posts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Profile, {
    nullable: true,
  })
  async profile(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserProfileArgs,
  ): Promise<Profile | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .profile({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserCommentsArgs,
  ): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .comments({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Like], {
    nullable: false,
  })
  async likes(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserLikesArgs,
  ): Promise<Like[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .likes({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Answer], {
    nullable: false,
  })
  async answers(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserAnswersArgs,
  ): Promise<Answer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .answers({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
