import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateManyQuestionInputEnvelope } from "../inputs/AnswerCreateManyQuestionInputEnvelope";
import { AnswerCreateOrConnectWithoutQuestionInput } from "../inputs/AnswerCreateOrConnectWithoutQuestionInput";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerScalarWhereInput } from "../inputs/AnswerScalarWhereInput";
import { AnswerUpdateManyWithWhereWithoutQuestionInput } from "../inputs/AnswerUpdateManyWithWhereWithoutQuestionInput";
import { AnswerUpdateWithWhereUniqueWithoutQuestionInput } from "../inputs/AnswerUpdateWithWhereUniqueWithoutQuestionInput";
import { AnswerUpsertWithWhereUniqueWithoutQuestionInput } from "../inputs/AnswerUpsertWithWhereUniqueWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpdateManyWithoutQuestionNestedInput", {})
export class AnswerUpdateManyWithoutQuestionNestedInput {
  @TypeGraphQL.Field((_type) => [AnswerCreateWithoutQuestionInput], {
    nullable: true,
  })
  create?: AnswerCreateWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerCreateOrConnectWithoutQuestionInput], {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [AnswerUpsertWithWhereUniqueWithoutQuestionInput],
    {
      nullable: true,
    },
  )
  upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateManyQuestionInputEnvelope, {
    nullable: true,
  })
  createMany?: AnswerCreateManyQuestionInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  set?: AnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: AnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  delete?: AnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: AnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [AnswerUpdateWithWhereUniqueWithoutQuestionInput],
    {
      nullable: true,
    },
  )
  update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [AnswerUpdateManyWithWhereWithoutQuestionInput],
    {
      nullable: true,
    },
  )
  updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: AnswerScalarWhereInput[] | undefined;
}
