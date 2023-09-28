import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Answer } from "../models/Answer";
import { Post } from "../models/Post";
import { QuestionCount } from "../resolvers/outputs/QuestionCount";

@TypeGraphQL.ObjectType("Question", {})
export class Question {
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

  Answer?: Answer[];

  @TypeGraphQL.Field((_type) => QuestionCount, {
    nullable: true,
  })
  _count?: QuestionCount | null;
}
