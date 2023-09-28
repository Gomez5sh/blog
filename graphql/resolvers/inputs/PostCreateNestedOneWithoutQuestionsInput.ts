import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutQuestionsInput } from "../inputs/PostCreateOrConnectWithoutQuestionsInput";
import { PostCreateWithoutQuestionsInput } from "../inputs/PostCreateWithoutQuestionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutQuestionsInput", {})
export class PostCreateNestedOneWithoutQuestionsInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutQuestionsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
