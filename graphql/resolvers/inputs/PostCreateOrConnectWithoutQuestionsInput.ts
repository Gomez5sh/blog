import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutQuestionsInput } from "../inputs/PostCreateWithoutQuestionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutQuestionsInput", {})
export class PostCreateOrConnectWithoutQuestionsInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutQuestionsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutQuestionsInput;
}
