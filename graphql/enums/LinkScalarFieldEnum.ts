import * as TypeGraphQL from "type-graphql";

export enum LinkScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(LinkScalarFieldEnum, {
  name: "LinkScalarFieldEnum",
  description: undefined,
});
