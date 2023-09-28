import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutImagesInput } from "../inputs/PostCreateWithoutImagesInput";
import { PostUpdateWithoutImagesInput } from "../inputs/PostUpdateWithoutImagesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutImagesInput", {})
export class PostUpsertWithoutImagesInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutImagesInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutImagesInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutImagesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutImagesInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
