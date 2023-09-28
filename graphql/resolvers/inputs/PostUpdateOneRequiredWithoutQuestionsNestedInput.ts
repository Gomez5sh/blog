import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutQuestionsInput } from "../inputs/PostCreateOrConnectWithoutQuestionsInput";
import { PostCreateWithoutQuestionsInput } from "../inputs/PostCreateWithoutQuestionsInput";
import { PostUpdateToOneWithWhereWithoutQuestionsInput } from "../inputs/PostUpdateToOneWithWhereWithoutQuestionsInput";
import { PostUpsertWithoutQuestionsInput } from "../inputs/PostUpsertWithoutQuestionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutQuestionsNestedInput", {})
export class PostUpdateOneRequiredWithoutQuestionsNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutQuestionsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutQuestionsInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutQuestionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutQuestionsInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutQuestionsInput | undefined;
}
