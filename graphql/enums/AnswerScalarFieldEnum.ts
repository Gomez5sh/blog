import * as TypeGraphQL from "type-graphql";

export enum AnswerScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  questionId = "questionId",
  authorId = "authorId",
}
TypeGraphQL.registerEnumType(AnswerScalarFieldEnum, {
  name: "AnswerScalarFieldEnum",
  description: undefined,
});
