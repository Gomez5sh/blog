import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeWhereInput } from "../inputs/CodeWhereInput";

@TypeGraphQL.InputType("CodeListRelationFilter", {})
export class CodeListRelationFilter {
  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  every?: CodeWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  some?: CodeWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  none?: CodeWhereInput | undefined;
}
