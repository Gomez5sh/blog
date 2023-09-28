import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioUpdateManyWithoutPostNestedInput } from "../inputs/AudioUpdateManyWithoutPostNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutPostsNestedInput } from "../inputs/CategoryUpdateManyWithoutPostsNestedInput";
import { CodeUpdateManyWithoutPostNestedInput } from "../inputs/CodeUpdateManyWithoutPostNestedInput";
import { CommentUpdateManyWithoutPostNestedInput } from "../inputs/CommentUpdateManyWithoutPostNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutPostNestedInput } from "../inputs/FileUpdateManyWithoutPostNestedInput";
import { ImageUpdateManyWithoutPostNestedInput } from "../inputs/ImageUpdateManyWithoutPostNestedInput";
import { LikeUpdateManyWithoutPostNestedInput } from "../inputs/LikeUpdateManyWithoutPostNestedInput";
import { LinkUpdateManyWithoutPostNestedInput } from "../inputs/LinkUpdateManyWithoutPostNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutPostNestedInput } from "../inputs/QuestionUpdateManyWithoutPostNestedInput";
import { QuoteUpdateManyWithoutPostNestedInput } from "../inputs/QuoteUpdateManyWithoutPostNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutPostsNestedInput } from "../inputs/TagUpdateManyWithoutPostsNestedInput";
import { UserUpdateOneWithoutPostsNestedInput } from "../inputs/UserUpdateOneWithoutPostsNestedInput";
import { VideoUpdateManyWithoutPostNestedInput } from "../inputs/VideoUpdateManyWithoutPostNestedInput";

@TypeGraphQL.InputType("PostUpdateWithoutPollsInput", {})
export class PostUpdateWithoutPollsInput {
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
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneWithoutPostsNestedInput, {
    nullable: true,
  })
  author?: UserUpdateOneWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => TagUpdateManyWithoutPostsNestedInput, {
    nullable: true,
  })
  tags?: TagUpdateManyWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => ImageUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpdateManyWithoutPostsNestedInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => VideoUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  videos?: VideoUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AudioUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  audios?: AudioUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  files?: FileUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => LinkUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  links?: LinkUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  questions?: QuestionUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  quotes?: QuoteUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CodeUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  codes?: CodeUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CommentUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => LikeUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutPostNestedInput | undefined;
}
