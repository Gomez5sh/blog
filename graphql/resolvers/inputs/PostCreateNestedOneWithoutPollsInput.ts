import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPollsInput } from "../inputs/PostCreateOrConnectWithoutPollsInput";
import { PostCreateWithoutPollsInput } from "../inputs/PostCreateWithoutPollsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutPollsInput", {})
export class PostCreateNestedOneWithoutPollsInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutPollsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutPollsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutPollsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPollsInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
