import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AnswerScalarWhereWithAggregatesInput", {})
export class AnswerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: AnswerScalarWhereWithAggregatesInput[] | undefined;

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
  questionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  authorId?: StringWithAggregatesFilter | undefined;
}
