import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutPostInput } from "../inputs/QuestionCreateWithoutPostInput";
import { QuestionUpdateWithoutPostInput } from "../inputs/QuestionUpdateWithoutPostInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpsertWithWhereUniqueWithoutPostInput", {})
export class QuestionUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => QuestionWhereUniqueInput, {
    nullable: false,
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => QuestionUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: QuestionUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => QuestionCreateWithoutPostInput, {
    nullable: false,
  })
  create!: QuestionCreateWithoutPostInput;
}
