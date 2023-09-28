import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateNestedManyWithoutPostInput } from "../inputs/AudioCreateNestedManyWithoutPostInput";
import { CategoryCreateNestedManyWithoutPostsInput } from "../inputs/CategoryCreateNestedManyWithoutPostsInput";
import { CodeCreateNestedManyWithoutPostInput } from "../inputs/CodeCreateNestedManyWithoutPostInput";
import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { FileCreateNestedManyWithoutPostInput } from "../inputs/FileCreateNestedManyWithoutPostInput";
import { ImageCreateNestedManyWithoutPostInput } from "../inputs/ImageCreateNestedManyWithoutPostInput";
import { LikeCreateNestedManyWithoutPostInput } from "../inputs/LikeCreateNestedManyWithoutPostInput";
import { LinkCreateNestedManyWithoutPostInput } from "../inputs/LinkCreateNestedManyWithoutPostInput";
import { QuestionCreateNestedManyWithoutPostInput } from "../inputs/QuestionCreateNestedManyWithoutPostInput";
import { QuoteCreateNestedManyWithoutPostInput } from "../inputs/QuoteCreateNestedManyWithoutPostInput";
import { TagCreateNestedManyWithoutPostsInput } from "../inputs/TagCreateNestedManyWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
import { VideoCreateNestedManyWithoutPostInput } from "../inputs/VideoCreateNestedManyWithoutPostInput";

@TypeGraphQL.InputType("PostCreateWithoutPollsInput", {})
export class PostCreateWithoutPollsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutPostsInput, {
    nullable: true,
  })
  author?: UserCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => TagCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => ImageCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => VideoCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  videos?: VideoCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => AudioCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  audios?: AudioCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => FileCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  files?: FileCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => LinkCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  links?: LinkCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  questions?: QuestionCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  quotes?: QuoteCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => CodeCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  codes?: CodeCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => CommentCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => LikeCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutPostInput | undefined;
}
