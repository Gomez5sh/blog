import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioScalarWhereInput } from "../inputs/AudioScalarWhereInput";
import { AudioUpdateManyMutationInput } from "../inputs/AudioUpdateManyMutationInput";

@TypeGraphQL.InputType("AudioUpdateManyWithWhereWithoutPostInput", {})
export class AudioUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => AudioScalarWhereInput, {
    nullable: false,
  })
  where!: AudioScalarWhereInput;

  @TypeGraphQL.Field((_type) => AudioUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AudioUpdateManyMutationInput;
}
