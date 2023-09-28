import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCreateWithoutPostInput } from "../inputs/CodeCreateWithoutPostInput";
import { CodeWhereUniqueInput } from "../inputs/CodeWhereUniqueInput";

@TypeGraphQL.InputType("CodeCreateOrConnectWithoutPostInput", {})
export class CodeCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CodeCreateWithoutPostInput, {
    nullable: false,
  })
  create!: CodeCreateWithoutPostInput;
}
