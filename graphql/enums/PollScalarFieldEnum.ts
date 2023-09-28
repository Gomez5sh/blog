import * as TypeGraphQL from "type-graphql";

export enum PollScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  question = "question",
  options = "options",
  postId = "postId",
}
TypeGraphQL.registerEnumType(PollScalarFieldEnum, {
  name: "PollScalarFieldEnum",
  description: undefined,
});
