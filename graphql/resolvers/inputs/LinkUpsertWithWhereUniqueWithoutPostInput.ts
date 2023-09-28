import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCreateWithoutPostInput } from "../inputs/LinkCreateWithoutPostInput";
import { LinkUpdateWithoutPostInput } from "../inputs/LinkUpdateWithoutPostInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";

@TypeGraphQL.InputType("LinkUpsertWithWhereUniqueWithoutPostInput", {})
export class LinkUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LinkUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: LinkUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => LinkCreateWithoutPostInput, {
    nullable: false,
  })
  create!: LinkCreateWithoutPostInput;
}
