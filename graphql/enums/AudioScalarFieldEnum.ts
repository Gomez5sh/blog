import * as TypeGraphQL from "type-graphql";

export enum AudioScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  postId = "postId",
}
TypeGraphQL.registerEnumType(AudioScalarFieldEnum, {
  name: "AudioScalarFieldEnum",
  description: undefined,
});
