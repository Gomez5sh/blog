import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionUpdateWithoutPostInput } from "../inputs/QuestionUpdateWithoutPostInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpdateWithWhereUniqueWithoutPostInput", {})
export class QuestionUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => QuestionWhereUniqueInput, {
    nullable: false,
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => QuestionUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: QuestionUpdateWithoutPostInput;
}
