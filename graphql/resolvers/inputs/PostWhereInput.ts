import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioListRelationFilter } from "../inputs/AudioListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { CodeListRelationFilter } from "../inputs/CodeListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { ImageListRelationFilter } from "../inputs/ImageListRelationFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { LinkListRelationFilter } from "../inputs/LinkListRelationFilter";
import { PollListRelationFilter } from "../inputs/PollListRelationFilter";
import { QuestionListRelationFilter } from "../inputs/QuestionListRelationFilter";
import { QuoteListRelationFilter } from "../inputs/QuoteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
import { VideoListRelationFilter } from "../inputs/VideoListRelationFilter";

@TypeGraphQL.InputType("PostWhereInput", {})
export class PostWhereInput {
  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  authorId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => UserNullableRelationFilter, {
    nullable: true,
  })
  author?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => TagListRelationFilter, {
    nullable: true,
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ImageListRelationFilter, {
    nullable: true,
  })
  images?: ImageListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CategoryListRelationFilter, {
    nullable: true,
  })
  categories?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => VideoListRelationFilter, {
    nullable: true,
  })
  videos?: VideoListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => AudioListRelationFilter, {
    nullable: true,
  })
  audios?: AudioListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => FileListRelationFilter, {
    nullable: true,
  })
  files?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => LinkListRelationFilter, {
    nullable: true,
  })
  links?: LinkListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => PollListRelationFilter, {
    nullable: true,
  })
  polls?: PollListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => QuestionListRelationFilter, {
    nullable: true,
  })
  questions?: QuestionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => QuoteListRelationFilter, {
    nullable: true,
  })
  quotes?: QuoteListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CodeListRelationFilter, {
    nullable: true,
  })
  codes?: CodeListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => LikeListRelationFilter, {
    nullable: true,
  })
  likes?: LikeListRelationFilter | undefined;
}
