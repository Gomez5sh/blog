import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyPostInputEnvelope } from "../inputs/PollCreateManyPostInputEnvelope";
import { PollCreateOrConnectWithoutPostInput } from "../inputs/PollCreateOrConnectWithoutPostInput";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollScalarWhereInput } from "../inputs/PollScalarWhereInput";
import { PollUpdateManyWithWhereWithoutPostInput } from "../inputs/PollUpdateManyWithWhereWithoutPostInput";
import { PollUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PollUpdateWithWhereUniqueWithoutPostInput";
import { PollUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PollUpsertWithWhereUniqueWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateManyWithoutPostNestedInput", {})
export class PollUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [PollCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PollCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: PollUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => PollCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PollCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereUniqueInput], {
    nullable: true,
  })
  set?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereUniqueInput], {
    nullable: true,
  })
  delete?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: PollUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: PollUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PollScalarWhereInput[] | undefined;
}
