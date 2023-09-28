import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeWhereInput } from "../../inputs/CodeWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountCodesArgs {
  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  where?: CodeWhereInput | undefined;
}
