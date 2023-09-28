import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCreateManyPostInputEnvelope } from "../inputs/LinkCreateManyPostInputEnvelope";
import { LinkCreateOrConnectWithoutPostInput } from "../inputs/LinkCreateOrConnectWithoutPostInput";
import { LinkCreateWithoutPostInput } from "../inputs/LinkCreateWithoutPostInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";

@TypeGraphQL.InputType("LinkCreateNestedManyWithoutPostInput", {})
export class LinkCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [LinkCreateWithoutPostInput], {
    nullable: true,
  })
  create?: LinkCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: LinkCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => LinkCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: LinkCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LinkWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinkWhereUniqueInput[] | undefined;
}
