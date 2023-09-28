import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioWhereInput } from "../inputs/AudioWhereInput";

@TypeGraphQL.InputType("AudioListRelationFilter", {})
export class AudioListRelationFilter {
  @TypeGraphQL.Field((_type) => AudioWhereInput, {
    nullable: true,
  })
  every?: AudioWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AudioWhereInput, {
    nullable: true,
  })
  some?: AudioWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AudioWhereInput, {
    nullable: true,
  })
  none?: AudioWhereInput | undefined;
}
