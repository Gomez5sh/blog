import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCreateManyPostInputEnvelope } from "../inputs/QuoteCreateManyPostInputEnvelope";
import { QuoteCreateOrConnectWithoutPostInput } from "../inputs/QuoteCreateOrConnectWithoutPostInput";
import { QuoteCreateWithoutPostInput } from "../inputs/QuoteCreateWithoutPostInput";
import { QuoteScalarWhereInput } from "../inputs/QuoteScalarWhereInput";
import { QuoteUpdateManyWithWhereWithoutPostInput } from "../inputs/QuoteUpdateManyWithWhereWithoutPostInput";
import { QuoteUpdateWithWhereUniqueWithoutPostInput } from "../inputs/QuoteUpdateWithWhereUniqueWithoutPostInput";
import { QuoteUpsertWithWhereUniqueWithoutPostInput } from "../inputs/QuoteUpsertWithWhereUniqueWithoutPostInput";
import { QuoteWhereUniqueInput } from "../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.InputType("QuoteUpdateManyWithoutPostNestedInput", {})
export class QuoteUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [QuoteCreateWithoutPostInput], {
    nullable: true,
  })
  create?: QuoteCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: QuoteCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: QuoteUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuoteCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: QuoteCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  set?: QuoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: QuoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  delete?: QuoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteWhereUniqueInput], {
    nullable: true,
  })
  connect?: QuoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: QuoteUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: QuoteUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: QuoteScalarWhereInput[] | undefined;
}
