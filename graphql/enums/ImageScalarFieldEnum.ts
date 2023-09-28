import * as TypeGraphQL from "type-graphql";

export enum ImageScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(ImageScalarFieldEnum, {
  name: "ImageScalarFieldEnum",
  description: undefined,
});
