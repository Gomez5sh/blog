import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLinkArgs {
  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;
}
