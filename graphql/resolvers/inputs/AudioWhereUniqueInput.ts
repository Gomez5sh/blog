import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioWhereInput } from "../inputs/AudioWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AudioWhereUniqueInput", {})
export class AudioWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereInput], {
    nullable: true,
  })
  AND?: AudioWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereInput], {
    nullable: true,
  })
  OR?: AudioWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereInput], {
    nullable: true,
  })
  NOT?: AudioWhereInput[] | undefined;

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
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;
}
