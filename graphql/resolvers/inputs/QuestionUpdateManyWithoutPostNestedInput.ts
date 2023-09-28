import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateManyPostInputEnvelope } from "../inputs/QuestionCreateManyPostInputEnvelope";
import { QuestionCreateOrConnectWithoutPostInput } from "../inputs/QuestionCreateOrConnectWithoutPostInput";
import { QuestionCreateWithoutPostInput } from "../inputs/QuestionCreateWithoutPostInput";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyWithWhereWithoutPostInput } from "../inputs/QuestionUpdateManyWithWhereWithoutPostInput";
import { QuestionUpdateWithWhereUniqueWithoutPostInput } from "../inputs/QuestionUpdateWithWhereUniqueWithoutPostInput";
import { QuestionUpsertWithWhereUniqueWithoutPostInput } from "../inputs/QuestionUpsertWithWhereUniqueWithoutPostInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpdateManyWithoutPostNestedInput", {})
export class QuestionUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [QuestionCreateWithoutPostInput], {
    nullable: true,
  })
  create?: QuestionCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [QuestionUpsertWithWhereUniqueWithoutPostInput],
    {
      nullable: true,
    },
  )
  upsert?: QuestionUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuestionCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: QuestionCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  set?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  delete?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  connect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [QuestionUpdateWithWhereUniqueWithoutPostInput],
    {
      nullable: true,
    },
  )
  update?: QuestionUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: QuestionUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuestionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: QuestionScalarWhereInput[] | undefined;
}
