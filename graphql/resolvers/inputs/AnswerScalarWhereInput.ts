import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AnswerScalarWhereInput", {})
export class AnswerScalarWhereInput {
  @TypeGraphQL.Field((_type) => [AnswerScalarWhereInput], {
    nullable: true,
  })
  AND?: AnswerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereInput], {
    nullable: true,
  })
  OR?: AnswerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereInput], {
    nullable: true,
  })
  NOT?: AnswerScalarWhereInput[] | undefined;

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
  questionId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter | undefined;
}
