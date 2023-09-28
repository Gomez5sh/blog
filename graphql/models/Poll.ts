import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType("Poll", {})
export class Poll {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  question!: string;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  options!: string[];

  post?: Post;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  postId!: string;
}
