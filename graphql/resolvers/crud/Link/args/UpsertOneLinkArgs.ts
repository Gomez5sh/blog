import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkCreateInput } from "../../../inputs/LinkCreateInput";
import { LinkUpdateInput } from "../../../inputs/LinkUpdateInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLinkArgs {
  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LinkCreateInput, {
    nullable: false,
  })
  create!: LinkCreateInput;

  @TypeGraphQL.Field((_type) => LinkUpdateInput, {
    nullable: false,
  })
  update!: LinkUpdateInput;
}
