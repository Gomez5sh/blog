import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkCreateInput } from "../../../inputs/LinkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLinkArgs {
  @TypeGraphQL.Field((_type) => LinkCreateInput, {
    nullable: false,
  })
  data!: LinkCreateInput;
}
