import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateManyAuthorInputEnvelope } from "../inputs/AnswerCreateManyAuthorInputEnvelope";
import { AnswerCreateOrConnectWithoutAuthorInput } from "../inputs/AnswerCreateOrConnectWithoutAuthorInput";
import { AnswerCreateWithoutAuthorInput } from "../inputs/AnswerCreateWithoutAuthorInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerCreateNestedManyWithoutAuthorInput", {})
export class AnswerCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => [AnswerCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: AnswerCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AnswerCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateManyAuthorInputEnvelope, {
    nullable: true,
  })
  createMany?: AnswerCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: AnswerWhereUniqueInput[] | undefined;
}
