import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCreateManyPostInput } from "../inputs/QuoteCreateManyPostInput";

@TypeGraphQL.InputType("QuoteCreateManyPostInputEnvelope", {})
export class QuoteCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [QuoteCreateManyPostInput], {
    nullable: false,
  })
  data!: QuoteCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
