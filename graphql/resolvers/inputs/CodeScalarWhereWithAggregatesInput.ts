import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CodeScalarWhereWithAggregatesInput", {})
export class CodeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [CodeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: CodeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: CodeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: CodeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  language?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
