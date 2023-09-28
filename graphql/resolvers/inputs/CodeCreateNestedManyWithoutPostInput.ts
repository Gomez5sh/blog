import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCreateManyPostInputEnvelope } from "../inputs/CodeCreateManyPostInputEnvelope";
import { CodeCreateOrConnectWithoutPostInput } from "../inputs/CodeCreateOrConnectWithoutPostInput";
import { CodeCreateWithoutPostInput } from "../inputs/CodeCreateWithoutPostInput";
import { CodeWhereUniqueInput } from "../inputs/CodeWhereUniqueInput";

@TypeGraphQL.InputType("CodeCreateNestedManyWithoutPostInput", {})
export class CodeCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [CodeCreateWithoutPostInput], {
    nullable: true,
  })
  create?: CodeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: CodeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => CodeCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: CodeCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CodeWhereUniqueInput], {
    nullable: true,
  })
  connect?: CodeWhereUniqueInput[] | undefined;
}
