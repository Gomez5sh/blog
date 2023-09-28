import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCreateWithoutPostInput } from "../inputs/LinkCreateWithoutPostInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";

@TypeGraphQL.InputType("LinkCreateOrConnectWithoutPostInput", {})
export class LinkCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LinkCreateWithoutPostInput, {
    nullable: false,
  })
  create!: LinkCreateWithoutPostInput;
}
