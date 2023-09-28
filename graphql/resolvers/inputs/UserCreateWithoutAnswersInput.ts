import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { LikeCreateNestedManyWithoutAuthorInput } from "../inputs/LikeCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutAnswersInput", {})
export class UserCreateWithoutAnswersInput {
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

  @TypeGraphQL.Field((_type) => LikeCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutAuthorInput | undefined;
}
