import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateManyPostInput } from "../inputs/AudioCreateManyPostInput";

@TypeGraphQL.InputType("AudioCreateManyPostInputEnvelope", {})
export class AudioCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [AudioCreateManyPostInput], {
    nullable: false,
  })
  data!: AudioCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
