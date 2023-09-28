import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateManyAuthorInputEnvelope } from "../inputs/AnswerCreateManyAuthorInputEnvelope";
import { AnswerCreateOrConnectWithoutAuthorInput } from "../inputs/AnswerCreateOrConnectWithoutAuthorInput";
import { AnswerCreateWithoutAuthorInput } from "../inputs/AnswerCreateWithoutAuthorInput";
import { AnswerScalarWhereInput } from "../inputs/AnswerScalarWhereInput";
import { AnswerUpdateManyWithWhereWithoutAuthorInput } from "../inputs/AnswerUpdateManyWithWhereWithoutAuthorInput";
import { AnswerUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/AnswerUpdateWithWhereUniqueWithoutAuthorInput";
import { AnswerUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/AnswerUpsertWithWhereUniqueWithoutAuthorInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpdateManyWithoutAuthorNestedInput", {})
export class AnswerUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field((_type) => [AnswerCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: AnswerCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [AnswerUpsertWithWhereUniqueWithoutAuthorInput],
    {
      nullable: true,
    },
  )
  upsert?: AnswerUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateManyAuthorInputEnvelope, {
    nullable: true,
  })
  createMany?: AnswerCreateManyAuthorInputEnvelope | undefined;

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
    (_type) => [AnswerUpdateWithWhereUniqueWithoutAuthorInput],
    {
      nullable: true,
    },
  )
  update?: AnswerUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  updateMany?: AnswerUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: AnswerScalarWhereInput[] | undefined;
}
