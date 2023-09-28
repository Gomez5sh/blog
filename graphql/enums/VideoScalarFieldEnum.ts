import * as TypeGraphQL from "type-graphql";

export enum VideoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(VideoScalarFieldEnum, {
  name: "VideoScalarFieldEnum",
  description: undefined,
});
