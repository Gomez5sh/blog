import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCreateWithoutPostInput } from "../inputs/CodeCreateWithoutPostInput";
import { CodeUpdateWithoutPostInput } from "../inputs/CodeUpdateWithoutPostInput";
import { CodeWhereUniqueInput } from "../inputs/CodeWhereUniqueInput";

@TypeGraphQL.InputType("CodeUpsertWithWhereUniqueWithoutPostInput", {})
export class CodeUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: false,
  })
  where!: CodeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CodeUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: CodeUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => CodeCreateWithoutPostInput, {
    nullable: false,
  })
  create!: CodeCreateWithoutPostInput;
}
