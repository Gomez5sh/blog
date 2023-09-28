import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { QuestionRelationFilter } from "../inputs/QuestionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AnswerWhereInput", {})
export class AnswerWhereInput {
  @TypeGraphQL.Field((_type) => [AnswerWhereInput], {
    nullable: true,
  })
  AND?: AnswerWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereInput], {
    nullable: true,
  })
  OR?: AnswerWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereInput], {
    nullable: true,
  })
  NOT?: AnswerWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => QuestionRelationFilter, {
    nullable: true,
  })
  question?: QuestionRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  author?: UserRelationFilter | undefined;
}
