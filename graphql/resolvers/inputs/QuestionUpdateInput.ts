import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateManyWithoutQuestionNestedInput } from "../inputs/AnswerUpdateManyWithoutQuestionNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutQuestionsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutQuestionsNestedInput";
import { QuestionUpdateoptionsInput } from "../inputs/QuestionUpdateoptionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("QuestionUpdateInput", {})
export class QuestionUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  question?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionUpdateoptionsInput, {
    nullable: true,
  })
  options?: QuestionUpdateoptionsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => PostUpdateOneRequiredWithoutQuestionsNestedInput,
    {
      nullable: true,
    },
  )
  post?: PostUpdateOneRequiredWithoutQuestionsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerUpdateManyWithoutQuestionNestedInput, {
    nullable: true,
  })
  Answer?: AnswerUpdateManyWithoutQuestionNestedInput | undefined;
}
