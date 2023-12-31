import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFileOrThrowArgs {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;
}
