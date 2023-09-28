import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollUpdateWithoutPostInput } from "../inputs/PollUpdateWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateWithWhereUniqueWithoutPostInput", {})
export class PollUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PollUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: PollUpdateWithoutPostInput;
}
