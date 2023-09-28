import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollCreateInput } from "../../../inputs/PollCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePollArgs {
  @TypeGraphQL.Field((_type) => PollCreateInput, {
    nullable: false,
  })
  data!: PollCreateInput;
}
