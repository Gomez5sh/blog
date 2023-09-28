import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkUpdateWithoutPostInput } from "../inputs/LinkUpdateWithoutPostInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";

@TypeGraphQL.InputType("LinkUpdateWithWhereUniqueWithoutPostInput", {})
export class LinkUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: false,
  })
  where!: LinkWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LinkUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: LinkUpdateWithoutPostInput;
}
