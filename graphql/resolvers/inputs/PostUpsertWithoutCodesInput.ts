import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCodesInput } from "../inputs/PostCreateWithoutCodesInput";
import { PostUpdateWithoutCodesInput } from "../inputs/PostUpdateWithoutCodesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutCodesInput", {})
export class PostUpsertWithoutCodesInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutCodesInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutCodesInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutCodesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutCodesInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
