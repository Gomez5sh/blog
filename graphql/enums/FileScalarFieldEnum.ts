import * as TypeGraphQL from "type-graphql";

export enum FileScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: "FileScalarFieldEnum",
  description: undefined,
});
