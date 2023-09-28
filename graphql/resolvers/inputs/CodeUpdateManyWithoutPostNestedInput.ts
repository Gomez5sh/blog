import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCreateManyPostInputEnvelope } from "../inputs/CodeCreateManyPostInputEnvelope";
import { CodeCreateOrConnectWithoutPostInput } from "../inputs/CodeCreateOrConnectWithoutPostInput";
import { CodeCreateWithoutPostInput } from "../inputs/CodeCreateWithoutPostInput";
import { CodeScalarWhereInput } from "../inputs/CodeScalarWhereInput";
import { CodeUpdateManyWithWhereWithoutPostInput } from "../inputs/CodeUpdateManyWithWhereWithoutPostInput";
import { CodeUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CodeUpdateWithWhereUniqueWithoutPostInput";
import { CodeUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CodeUpsertWithWhereUniqueWithoutPostInput";
import { CodeWhereUniqueInput } from "../inputs/CodeWhereUniqueInput";

@TypeGraphQL.InputType("CodeUpdateManyWithoutPostNestedInput", {})
export class CodeUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [CodeCreateWithoutPostInput], {
    nullable: true,
  })
  create?: CodeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: CodeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: CodeUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => CodeCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: CodeCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CodeWhereUniqueInput], {
    nullable: true,
  })
  set?: CodeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CodeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeWhereUniqueInput], {
    nullable: true,
  })
  delete?: CodeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeWhereUniqueInput], {
    nullable: true,
  })
  connect?: CodeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: CodeUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: CodeUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CodeScalarWhereInput[] | undefined;
}
