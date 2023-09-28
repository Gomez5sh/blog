import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCreateManyPostInput } from "../inputs/LinkCreateManyPostInput";

@TypeGraphQL.InputType("LinkCreateManyPostInputEnvelope", {})
export class LinkCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [LinkCreateManyPostInput], {
    nullable: false,
  })
  data!: LinkCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
