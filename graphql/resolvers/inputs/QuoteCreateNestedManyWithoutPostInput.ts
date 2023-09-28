import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCreateManyPostInputEnvelope } from "../inputs/QuoteCreateManyPostInputEnvelope";
import { QuoteCreateOrConnectWithoutPostInput } from "../inputs/QuoteCreateOrConnectWithoutPostInput";
import { QuoteCreateWithoutPostInput } from "../inputs/QuoteCreateWithoutPostInput";
import { QuoteWhereUniqueInput } from "../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.InputType("QuoteCreateNestedManyWithoutPostInput", {})
export class QuoteCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [QuoteCreateWithoutPostInput], {
    nullable: true,
  })
  create?: QuoteCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: QuoteCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuoteCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: QuoteCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  connect?: QuoteWhereUniqueInput[] | undefined;
}
