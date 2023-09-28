import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyPostInput } from "../inputs/FileCreateManyPostInput";

@TypeGraphQL.InputType("FileCreateManyPostInputEnvelope", {})
export class FileCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [FileCreateManyPostInput], {
    nullable: false,
  })
  data!: FileCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
