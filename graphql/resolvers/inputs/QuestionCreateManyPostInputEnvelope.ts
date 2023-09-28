import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyPostInput } from "../inputs/QuestionCreateManyPostInput";

@TypeGraphQL.InputType("QuestionCreateManyPostInputEnvelope", {})
export class QuestionCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [QuestionCreateManyPostInput], {
    nullable: false,
  })
  data!: QuestionCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
