import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeUpdateWithoutPostInput } from "../inputs/CodeUpdateWithoutPostInput";
import { CodeWhereUniqueInput } from "../inputs/CodeWhereUniqueInput";

@TypeGraphQL.InputType("CodeUpdateWithWhereUniqueWithoutPostInput", {})
export class CodeUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CodeUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: CodeUpdateWithoutPostInput;
}
