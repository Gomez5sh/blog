import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("QuoteScalarWhereWithAggregatesInput", {})
export class QuoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [QuoteScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: QuoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: QuoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: QuoteScalarWhereWithAggregatesInput[] | undefined;

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
  author?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
