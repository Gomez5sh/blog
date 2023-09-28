import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerListRelationFilter } from "../inputs/AnswerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { QuestionWhereInput } from "../inputs/QuestionWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("QuestionWhereUniqueInput", {})
export class QuestionWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereInput], {
    nullable: true,
  })
  AND?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereInput], {
    nullable: true,
  })
  OR?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereInput], {
    nullable: true,
  })
  NOT?: QuestionWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => AnswerListRelationFilter, {
    nullable: true,
  })
  Answer?: AnswerListRelationFilter | undefined;
}
