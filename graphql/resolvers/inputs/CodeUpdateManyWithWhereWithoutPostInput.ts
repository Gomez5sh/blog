import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeScalarWhereInput } from "../inputs/CodeScalarWhereInput";
import { CodeUpdateManyMutationInput } from "../inputs/CodeUpdateManyMutationInput";

@TypeGraphQL.InputType("CodeUpdateManyWithWhereWithoutPostInput", {})
export class CodeUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => CodeScalarWhereInput, {
    nullable: false,
  })
  where!: CodeScalarWhereInput;

  @TypeGraphQL.Field((_type) => CodeUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CodeUpdateManyMutationInput;
}
