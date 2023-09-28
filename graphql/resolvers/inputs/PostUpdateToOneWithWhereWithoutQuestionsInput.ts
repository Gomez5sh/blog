import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutQuestionsInput } from "../inputs/PostUpdateWithoutQuestionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutQuestionsInput", {})
export class PostUpdateToOneWithWhereWithoutQuestionsInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutQuestionsInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutQuestionsInput;
}
