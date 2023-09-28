import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollUpdateWithoutPostInput } from "../inputs/PollUpdateWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpsertWithWhereUniqueWithoutPostInput", {})
export class PollUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PollUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: PollUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => PollCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPostInput;
}
