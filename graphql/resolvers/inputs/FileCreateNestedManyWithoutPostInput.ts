import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyPostInputEnvelope } from "../inputs/FileCreateManyPostInputEnvelope";
import { FileCreateOrConnectWithoutPostInput } from "../inputs/FileCreateOrConnectWithoutPostInput";
import { FileCreateWithoutPostInput } from "../inputs/FileCreateWithoutPostInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutPostInput", {})
export class FileCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [FileCreateWithoutPostInput], {
    nullable: true,
  })
  create?: FileCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: FileCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => FileCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: FileCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereUniqueInput], {
    nullable: true,
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
