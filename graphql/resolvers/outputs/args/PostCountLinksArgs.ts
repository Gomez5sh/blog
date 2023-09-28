import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkWhereInput } from "../../inputs/LinkWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountLinksArgs {
  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  where?: LinkWhereInput | undefined;
}
