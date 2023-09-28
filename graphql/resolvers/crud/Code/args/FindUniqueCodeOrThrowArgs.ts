import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeWhereUniqueInput } from "../../../inputs/CodeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCodeOrThrowArgs {
  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;
}
