import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikeWhereUniqueInput } from "../../../inputs/LikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLikeOrThrowArgs {
  @TypeGraphQL.Field((_type) => LikeWhereUniqueInput, {
    nullable: false,
  })
  where!: LikeWhereUniqueInput;
}
