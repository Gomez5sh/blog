import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateManyQuestionInputEnvelope } from "../inputs/AnswerCreateManyQuestionInputEnvelope";
import { AnswerCreateOrConnectWithoutQuestionInput } from "../inputs/AnswerCreateOrConnectWithoutQuestionInput";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerCreateNestedManyWithoutQuestionInput", {})
export class AnswerCreateNestedManyWithoutQuestionInput {
  @TypeGraphQL.Field((_type) => [AnswerCreateWithoutQuestionInput], {
    nullable: true,
  })
  create?: AnswerCreateWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerCreateOrConnectWithoutQuestionInput], {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateManyQuestionInputEnvelope, {
    nullable: true,
  })
  createMany?: AnswerCreateManyQuestionInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: AnswerWhereUniqueInput[] | undefined;
}
