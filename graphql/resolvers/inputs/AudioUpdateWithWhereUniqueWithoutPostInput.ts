import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioUpdateWithoutPostInput } from "../inputs/AudioUpdateWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioUpdateWithWhereUniqueWithoutPostInput", {})
export class AudioUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => AudioWhereUniqueInput, {
    nullable: false,
  })
  where!: AudioWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AudioUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: AudioUpdateWithoutPostInput;
}
