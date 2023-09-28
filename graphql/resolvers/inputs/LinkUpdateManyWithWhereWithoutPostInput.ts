import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkScalarWhereInput } from "../inputs/LinkScalarWhereInput";
import { LinkUpdateManyMutationInput } from "../inputs/LinkUpdateManyMutationInput";

@TypeGraphQL.InputType("LinkUpdateManyWithWhereWithoutPostInput", {})
export class LinkUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => LinkScalarWhereInput, {
    nullable: false,
  })
  where!: LinkScalarWhereInput;

  @TypeGraphQL.Field((_type) => LinkUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LinkUpdateManyMutationInput;
}
