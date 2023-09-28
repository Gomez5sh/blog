import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeUpdateInput } from "../../../inputs/CodeUpdateInput";
import { CodeWhereUniqueInput } from "../../../inputs/CodeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCodeArgs {
  @TypeGraphQL.Field((_type) => CodeUpdateInput, {
    nullable: false,
  })
  data!: CodeUpdateInput;

  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;
}
