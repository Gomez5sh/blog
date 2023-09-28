import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPollsInput } from "../inputs/PostCreateWithoutPollsInput";
import { PostUpdateWithoutPollsInput } from "../inputs/PostUpdateWithoutPollsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutPollsInput", {})
export class PostUpsertWithoutPollsInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutPollsInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutPollsInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutPollsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPollsInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
