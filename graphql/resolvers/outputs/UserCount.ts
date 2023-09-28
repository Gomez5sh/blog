import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAnswersArgs } from "./args/UserCountAnswersArgs";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountLikesArgs } from "./args/UserCountLikesArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  posts!: number;
  comments!: number;
  likes!: number;
  answers!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "posts",
    nullable: false,
  })
  getPosts(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountPostsArgs,
  ): number {
    return root.posts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "comments",
    nullable: false,
  })
  getComments(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountCommentsArgs,
  ): number {
    return root.comments;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "likes",
    nullable: false,
  })
  getLikes(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountLikesArgs,
  ): number {
    return root.likes;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "answers",
    nullable: false,
  })
  getAnswers(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountAnswersArgs,
  ): number {
    return root.answers;
  }
}
