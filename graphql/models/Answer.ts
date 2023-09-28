import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Question } from "../models/Question";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Answer", {})
export class Answer {
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
  content!: string;

  question?: Question;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  questionId!: string;

  author?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  authorId!: string;
}
