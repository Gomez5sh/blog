import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateManyWithoutAuthorNestedInput } from "../inputs/AnswerUpdateManyWithoutAuthorNestedInput";
import { CommentUpdateManyWithoutAuthorNestedInput } from "../inputs/CommentUpdateManyWithoutAuthorNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutAuthorNestedInput } from "../inputs/LikeUpdateManyWithoutAuthorNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfileUpdateOneWithoutUserNestedInput } from "../inputs/ProfileUpdateOneWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutPostsInput", {})
export class UserUpdateWithoutPostsInput {
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

  @TypeGraphQL.Field((_type) => ProfileUpdateOneWithoutUserNestedInput, {
    nullable: true,
  })
  profile?: ProfileUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CommentUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field((_type) => LikeUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  answers?: AnswerUpdateManyWithoutAuthorNestedInput | undefined;
}
