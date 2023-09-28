import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioCreateInput } from "../../../inputs/AudioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAudioArgs {
  @TypeGraphQL.Field((_type) => AudioCreateInput, {
    nullable: false,
  })
  data!: AudioCreateInput;
}
