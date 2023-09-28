import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateManyPostInputEnvelope } from "../inputs/AudioCreateManyPostInputEnvelope";
import { AudioCreateOrConnectWithoutPostInput } from "../inputs/AudioCreateOrConnectWithoutPostInput";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioScalarWhereInput } from "../inputs/AudioScalarWhereInput";
import { AudioUpdateManyWithWhereWithoutPostInput } from "../inputs/AudioUpdateManyWithWhereWithoutPostInput";
import { AudioUpdateWithWhereUniqueWithoutPostInput } from "../inputs/AudioUpdateWithWhereUniqueWithoutPostInput";
import { AudioUpsertWithWhereUniqueWithoutPostInput } from "../inputs/AudioUpsertWithWhereUniqueWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioUpdateManyWithoutPostNestedInput", {})
export class AudioUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [AudioCreateWithoutPostInput], {
    nullable: true,
  })
  create?: AudioCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: AudioCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: AudioUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => AudioCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: AudioCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereUniqueInput], {
    nullable: true,
  })
  set?: AudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: AudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereUniqueInput], {
    nullable: true,
  })
  delete?: AudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioWhereUniqueInput], {
    nullable: true,
  })
  connect?: AudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: AudioUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: AudioUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: AudioScalarWhereInput[] | undefined;
}
