import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateoptionsInput } from "../inputs/PollCreateoptionsInput";
import { PostCreateNestedOneWithoutPollsInput } from "../inputs/PostCreateNestedOneWithoutPollsInput";

@TypeGraphQL.InputType("PollCreateInput", {})
export class PollCreateInput {
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
  question!: string;

  @TypeGraphQL.Field((_type) => PollCreateoptionsInput, {
    nullable: true,
  })
  options?: PollCreateoptionsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutPollsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutPollsInput;
}
