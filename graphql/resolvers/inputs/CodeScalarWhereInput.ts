import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CodeScalarWhereInput", {})
export class CodeScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CodeScalarWhereInput], {
    nullable: true,
  })
  AND?: CodeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarWhereInput], {
    nullable: true,
  })
  OR?: CodeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarWhereInput], {
    nullable: true,
  })
  NOT?: CodeScalarWhereInput[] | undefined;

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
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  language?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
