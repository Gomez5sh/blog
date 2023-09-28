import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyPostInputEnvelope } from "../inputs/QuestionCreateManyPostInputEnvelope";
import { QuestionCreateOrConnectWithoutPostInput } from "../inputs/QuestionCreateOrConnectWithoutPostInput";
import { QuestionCreateWithoutPostInput } from "../inputs/QuestionCreateWithoutPostInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionCreateNestedManyWithoutPostInput", {})
export class QuestionCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [QuestionCreateWithoutPostInput], {
    nullable: true,
  })
  create?: QuestionCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuestionCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: QuestionCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  connect?: QuestionWhereUniqueInput[] | undefined;
}
