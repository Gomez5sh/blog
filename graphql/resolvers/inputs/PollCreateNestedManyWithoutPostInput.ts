import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyPostInputEnvelope } from "../inputs/PollCreateManyPostInputEnvelope";
import { PollCreateOrConnectWithoutPostInput } from "../inputs/PollCreateOrConnectWithoutPostInput";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateNestedManyWithoutPostInput", {})
export class PollCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [PollCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PollCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => PollCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PollCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollWhereUniqueInput[] | undefined;
}
