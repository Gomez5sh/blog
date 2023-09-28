import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutPostInput } from "../inputs/FileCreateWithoutPostInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutPostInput", {})
export class FileCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutPostInput, {
    nullable: false,
  })
  create!: FileCreateWithoutPostInput;
}
