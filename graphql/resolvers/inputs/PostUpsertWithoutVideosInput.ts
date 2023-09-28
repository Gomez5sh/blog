import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutVideosInput } from "../inputs/PostCreateWithoutVideosInput";
import { PostUpdateWithoutVideosInput } from "../inputs/PostUpdateWithoutVideosInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutVideosInput", {})
export class PostUpsertWithoutVideosInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutVideosInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutVideosInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutVideosInput, {
    nullable: false,
  })
  create!: PostCreateWithoutVideosInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
