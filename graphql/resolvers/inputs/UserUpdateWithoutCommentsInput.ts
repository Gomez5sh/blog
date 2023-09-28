import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateManyWithoutAuthorNestedInput } from "../inputs/AnswerUpdateManyWithoutAuthorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutAuthorNestedInput } from "../inputs/LikeUpdateManyWithoutAuthorNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { ProfileUpdateOneWithoutUserNestedInput } from "../inputs/ProfileUpdateOneWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
export class UserUpdateWithoutCommentsInput {
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
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileUpdateOneWithoutUserNestedInput, {
    nullable: true,
  })
  profile?: ProfileUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => LikeUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  answers?: AnswerUpdateManyWithoutAuthorNestedInput | undefined;
}
