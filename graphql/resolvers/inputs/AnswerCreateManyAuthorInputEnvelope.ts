import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateManyAuthorInput } from "../inputs/AnswerCreateManyAuthorInput";

@TypeGraphQL.InputType("AnswerCreateManyAuthorInputEnvelope", {})
export class AnswerCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field((_type) => [AnswerCreateManyAuthorInput], {
    nullable: false,
  })
  data!: AnswerCreateManyAuthorInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
