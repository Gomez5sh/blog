import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutLikesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikesNestedInput";

@TypeGraphQL.InputType("LikeUpdateInput", {})
export class LikeUpdateInput {
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

  @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutLikesNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true,
  })
  author?: UserUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
