import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoWhereUniqueInput", {})
export class VideoWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereInput], {
    nullable: true,
  })
  AND?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereInput], {
    nullable: true,
  })
  OR?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereInput], {
    nullable: true,
  })
  NOT?: VideoWhereInput[] | undefined;

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
