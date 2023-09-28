import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeWhereInput } from "../../../inputs/CodeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCodeArgs {
  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  where?: CodeWhereInput | undefined;
}
