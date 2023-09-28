import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyPostInputEnvelope } from "../inputs/FileCreateManyPostInputEnvelope";
import { FileCreateOrConnectWithoutPostInput } from "../inputs/FileCreateOrConnectWithoutPostInput";
import { FileCreateWithoutPostInput } from "../inputs/FileCreateWithoutPostInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutPostInput } from "../inputs/FileUpdateManyWithWhereWithoutPostInput";
import { FileUpdateWithWhereUniqueWithoutPostInput } from "../inputs/FileUpdateWithWhereUniqueWithoutPostInput";
import { FileUpsertWithWhereUniqueWithoutPostInput } from "../inputs/FileUpsertWithWhereUniqueWithoutPostInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutPostNestedInput", {})
export class FileUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [FileCreateWithoutPostInput], {
    nullable: true,
  })
  create?: FileCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: FileCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: FileUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => FileCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: FileCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereUniqueInput], {
    nullable: true,
  })
  set?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereUniqueInput], {
    nullable: true,
  })
  delete?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereUniqueInput], {
    nullable: true,
  })
  connect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: FileUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: FileUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
