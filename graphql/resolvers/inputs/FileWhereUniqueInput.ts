import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FileWhereInput } from "../inputs/FileWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FileWhereUniqueInput", {})
export class FileWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  AND?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  OR?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  NOT?: FileWhereInput[] | undefined;

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
