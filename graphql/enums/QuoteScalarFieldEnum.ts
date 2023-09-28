import * as TypeGraphQL from "type-graphql";

export enum QuoteScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  author = "author",
  postId = "postId",
}
TypeGraphQL.registerEnumType(QuoteScalarFieldEnum, {
  name: "QuoteScalarFieldEnum",
  description: undefined,
});
