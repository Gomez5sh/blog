import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCreateManyPostInput } from "../inputs/CodeCreateManyPostInput";

@TypeGraphQL.InputType("CodeCreateManyPostInputEnvelope", {})
export class CodeCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [CodeCreateManyPostInput], {
    nullable: false,
  })
  data!: CodeCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
