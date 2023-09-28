import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeCreateInput } from "../../../inputs/CodeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCodeArgs {
  @TypeGraphQL.Field((_type) => CodeCreateInput, {
    nullable: false,
  })
  data!: CodeCreateInput;
}
