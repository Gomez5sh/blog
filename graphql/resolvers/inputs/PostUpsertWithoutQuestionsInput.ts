import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutQuestionsInput } from "../inputs/PostCreateWithoutQuestionsInput";
import { PostUpdateWithoutQuestionsInput } from "../inputs/PostUpdateWithoutQuestionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutQuestionsInput", {})
export class PostUpsertWithoutQuestionsInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutQuestionsInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutQuestionsInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutQuestionsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutQuestionsInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
