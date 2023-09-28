import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutPostInput } from "../inputs/FileCreateWithoutPostInput";
import { FileUpdateWithoutPostInput } from "../inputs/FileUpdateWithoutPostInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutPostInput", {})
export class FileUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: FileUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutPostInput, {
    nullable: false,
  })
  create!: FileCreateWithoutPostInput;
}
