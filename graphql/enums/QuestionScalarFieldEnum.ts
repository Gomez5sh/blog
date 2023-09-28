import * as TypeGraphQL from "type-graphql";

export enum QuestionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  question = "question",
  options = "options",
  postId = "postId",
}
TypeGraphQL.registerEnumType(QuestionScalarFieldEnum, {
  name: "QuestionScalarFieldEnum",
  description: undefined,
});
