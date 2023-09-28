import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PollScalarWhereInput", {})
export class PollScalarWhereInput {
  @TypeGraphQL.Field((_type) => [PollScalarWhereInput], {
    nullable: true,
  })
  AND?: PollScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollScalarWhereInput], {
    nullable: true,
  })
  OR?: PollScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollScalarWhereInput], {
    nullable: true,
  })
  NOT?: PollScalarWhereInput[] | undefined;

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
  question?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, {
    nullable: true,
  })
  options?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
