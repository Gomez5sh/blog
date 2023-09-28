import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateNestedManyWithoutAuthorInput } from "../inputs/AnswerCreateNestedManyWithoutAuthorInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutLikesInput", {})
export class UserCreateWithoutLikesInput {
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
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CommentCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  answers?: AnswerCreateNestedManyWithoutAuthorInput | undefined;
}
