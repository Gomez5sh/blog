import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkUpdateInput } from "../../../inputs/LinkUpdateInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLinkArgs {
  @TypeGraphQL.Field((_type) => LinkUpdateInput, {
    nullable: false,
  })
  data!: LinkUpdateInput;

  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;
}
