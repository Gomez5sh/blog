import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountAudiosArgs } from "./args/PostCountAudiosArgs";
import { PostCountCategoriesArgs } from "./args/PostCountCategoriesArgs";
import { PostCountCodesArgs } from "./args/PostCountCodesArgs";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountFilesArgs } from "./args/PostCountFilesArgs";
import { PostCountImagesArgs } from "./args/PostCountImagesArgs";
import { PostCountLikesArgs } from "./args/PostCountLikesArgs";
import { PostCountLinksArgs } from "./args/PostCountLinksArgs";
import { PostCountPollsArgs } from "./args/PostCountPollsArgs";
import { PostCountQuestionsArgs } from "./args/PostCountQuestionsArgs";
import { PostCountQuotesArgs } from "./args/PostCountQuotesArgs";
import { PostCountTagsArgs } from "./args/PostCountTagsArgs";
import { PostCountVideosArgs } from "./args/PostCountVideosArgs";

@TypeGraphQL.ObjectType("PostCount", {})
export class PostCount {
  tags!: number;
  images!: number;
  categories!: number;
  videos!: number;
  audios!: number;
  files!: number;
  links!: number;
  polls!: number;
  questions!: number;
  quotes!: number;
  codes!: number;
  comments!: number;
  likes!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "tags",
    nullable: false,
  })
  getTags(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountTagsArgs,
  ): number {
    return root.tags;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "images",
    nullable: false,
  })
  getImages(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountImagesArgs,
  ): number {
    return root.images;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "categories",
    nullable: false,
  })
  getCategories(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountCategoriesArgs,
  ): number {
    return root.categories;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "videos",
    nullable: false,
  })
  getVideos(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountVideosArgs,
  ): number {
    return root.videos;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "audios",
    nullable: false,
  })
  getAudios(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountAudiosArgs,
  ): number {
    return root.audios;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "files",
    nullable: false,
  })
  getFiles(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountFilesArgs,
  ): number {
    return root.files;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "links",
    nullable: false,
  })
  getLinks(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountLinksArgs,
  ): number {
    return root.links;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "polls",
    nullable: false,
  })
  getPolls(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountPollsArgs,
  ): number {
    return root.polls;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "questions",
    nullable: false,
  })
  getQuestions(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountQuestionsArgs,
  ): number {
    return root.questions;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "quotes",
    nullable: false,
  })
  getQuotes(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountQuotesArgs,
  ): number {
    return root.quotes;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "codes",
    nullable: false,
  })
  getCodes(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountCodesArgs,
  ): number {
    return root.codes;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "comments",
    nullable: false,
  })
  getComments(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountCommentsArgs,
  ): number {
    return root.comments;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "likes",
    nullable: false,
  })
  getLikes(
    @TypeGraphQL.Root() root: PostCount,
    @TypeGraphQL.Args() args: PostCountLikesArgs,
  ): number {
    return root.likes;
  }
}
