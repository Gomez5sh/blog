import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  postId = "postId",
  authorId = "authorId",
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});
