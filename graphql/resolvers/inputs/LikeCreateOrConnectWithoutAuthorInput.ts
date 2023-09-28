import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutAuthorInput } from "../inputs/LikeCreateWithoutAuthorInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateOrConnectWithoutAuthorInput", {})
export class LikeCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => LikeWhereUniqueInput, {
    nullable: false,
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LikeCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: LikeCreateWithoutAuthorInput;
}
