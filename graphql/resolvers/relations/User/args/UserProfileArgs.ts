import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";

@TypeGraphQL.ArgsType()
export class UserProfileArgs {
  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  where?: ProfileWhereInput | undefined;
}
