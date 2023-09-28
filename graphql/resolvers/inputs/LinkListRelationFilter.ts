import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkWhereInput } from "../inputs/LinkWhereInput";

@TypeGraphQL.InputType("LinkListRelationFilter", {})
export class LinkListRelationFilter {
  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  every?: LinkWhereInput | undefined;

  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  some?: LinkWhereInput | undefined;

  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  none?: LinkWhereInput | undefined;
}
