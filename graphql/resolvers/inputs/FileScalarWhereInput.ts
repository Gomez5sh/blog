import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FileScalarWhereInput", {})
export class FileScalarWhereInput {
  @TypeGraphQL.Field((_type) => [FileScalarWhereInput], {
    nullable: true,
  })
  AND?: FileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereInput], {
    nullable: true,
  })
  OR?: FileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereInput], {
    nullable: true,
  })
  NOT?: FileScalarWhereInput[] | undefined;

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
  url?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
