import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";

@TypeGraphQL.InputType("ProfileNullableRelationFilter", {})
export class ProfileNullableRelationFilter {
  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  is?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  isNot?: ProfileWhereInput | undefined;
}
