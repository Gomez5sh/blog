import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionUpdateWithoutAnswerInput } from "../inputs/QuestionUpdateWithoutAnswerInput";
import { QuestionWhereInput } from "../inputs/QuestionWhereInput";

@TypeGraphQL.InputType("QuestionUpdateToOneWithWhereWithoutAnswerInput", {})
export class QuestionUpdateToOneWithWhereWithoutAnswerInput {
  @TypeGraphQL.Field((_type) => QuestionWhereInput, {
    nullable: true,
  })
  where?: QuestionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionUpdateWithoutAnswerInput, {
    nullable: false,
  })
  data!: QuestionUpdateWithoutAnswerInput;
}
