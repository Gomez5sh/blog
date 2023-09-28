import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QuestionUpdateOneRequiredWithoutAnswerNestedInput } from "../inputs/QuestionUpdateOneRequiredWithoutAnswerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAnswersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAnswersNestedInput";

@TypeGraphQL.InputType("AnswerUpdateInput", {})
export class AnswerUpdateInput {
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
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => QuestionUpdateOneRequiredWithoutAnswerNestedInput,
    {
      nullable: true,
    },
  )
  question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UserUpdateOneRequiredWithoutAnswersNestedInput,
    {
      nullable: true,
    },
  )
  author?: UserUpdateOneRequiredWithoutAnswersNestedInput | undefined;
}
