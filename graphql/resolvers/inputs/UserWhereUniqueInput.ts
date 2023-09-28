import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerListRelationFilter } from "../inputs/AnswerListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileNullableRelationFilter } from "../inputs/ProfileNullableRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ProfileNullableRelationFilter, {
    nullable: true,
  })
  profile?: ProfileNullableRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => LikeListRelationFilter, {
    nullable: true,
  })
  likes?: LikeListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => AnswerListRelationFilter, {
    nullable: true,
  })
  answers?: AnswerListRelationFilter | undefined;
}
