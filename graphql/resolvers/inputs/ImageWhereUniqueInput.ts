import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ImageWhereInput } from "../inputs/ImageWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ImageWhereUniqueInput", {})
export class ImageWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereInput], {
    nullable: true,
  })
  AND?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereInput], {
    nullable: true,
  })
  OR?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereInput], {
    nullable: true,
  })
  NOT?: ImageWhereInput[] | undefined;

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
