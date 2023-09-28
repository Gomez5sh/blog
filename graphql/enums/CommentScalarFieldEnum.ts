import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  postId = "postId",
  authorId = "authorId",
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
