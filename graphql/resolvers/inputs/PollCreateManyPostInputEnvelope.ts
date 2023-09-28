import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateManyPostInput } from "../inputs/PollCreateManyPostInput";

@TypeGraphQL.InputType("PollCreateManyPostInputEnvelope", {})
export class PollCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [PollCreateManyPostInput], {
    nullable: false,
  })
  data!: PollCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
