import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutPostInput } from "../inputs/FileUpdateWithoutPostInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutPostInput", {})
export class FileUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: FileUpdateWithoutPostInput;
}
