import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPollsInput } from "../inputs/PostCreateWithoutPollsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutPollsInput", {})
export class PostCreateOrConnectWithoutPollsInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutPollsInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPollsInput;
}
