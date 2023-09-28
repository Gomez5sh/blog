import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeCreateInput } from "../../../inputs/CodeCreateInput";
import { CodeUpdateInput } from "../../../inputs/CodeUpdateInput";
import { CodeWhereUniqueInput } from "../../../inputs/CodeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCodeArgs {
  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CodeCreateInput, {
    nullable: false,
  })
  create!: CodeCreateInput;

  @TypeGraphQL.Field((_type) => CodeUpdateInput, {
    nullable: false,
  })
  update!: CodeUpdateInput;
}
