import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeWhereInput } from "../../inputs/LikeWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountLikesArgs {
  @TypeGraphQL.Field((_type) => LikeWhereInput, {
    nullable: true,
  })
  where?: LikeWhereInput | undefined;
}
