import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("LikeCreateInput", {})
export class LikeCreateInput {
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

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutLikesInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutLikesInput;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutLikesInput, {
    nullable: false,
  })
  author!: UserCreateNestedOneWithoutLikesInput;
}
