import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioUpdateWithoutPostInput } from "../inputs/AudioUpdateWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioUpsertWithWhereUniqueWithoutPostInput", {})
export class AudioUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AudioUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: AudioUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => AudioCreateWithoutPostInput, {
    nullable: false,
  })
  create!: AudioCreateWithoutPostInput;
}
