import * as TypeGraphQL from "type-graphql";

export enum CodeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  language = "language",
  postId = "postId",
}
TypeGraphQL.registerEnumType(CodeScalarFieldEnum, {
  name: "CodeScalarFieldEnum",
  description: undefined,
});
