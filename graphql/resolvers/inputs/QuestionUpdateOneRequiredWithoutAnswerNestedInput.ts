import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateOrConnectWithoutAnswerInput } from "../inputs/QuestionCreateOrConnectWithoutAnswerInput";
import { QuestionCreateWithoutAnswerInput } from "../inputs/QuestionCreateWithoutAnswerInput";
import { QuestionUpdateToOneWithWhereWithoutAnswerInput } from "../inputs/QuestionUpdateToOneWithWhereWithoutAnswerInput";
import { QuestionUpsertWithoutAnswerInput } from "../inputs/QuestionUpsertWithoutAnswerInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpdateOneRequiredWithoutAnswerNestedInput", {})
export class QuestionUpdateOneRequiredWithoutAnswerNestedInput {
  @TypeGraphQL.Field((_type) => QuestionCreateWithoutAnswerInput, {
    nullable: true,
  })
  create?: QuestionCreateWithoutAnswerInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionCreateOrConnectWithoutAnswerInput, {
    nullable: true,
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionUpsertWithoutAnswerInput, {
    nullable: true,
  })
  upsert?: QuestionUpsertWithoutAnswerInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionWhereUniqueInput, {
    nullable: true,
  })
  connect?: QuestionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => QuestionUpdateToOneWithWhereWithoutAnswerInput,
    {
      nullable: true,
    },
  )
  update?: QuestionUpdateToOneWithWhereWithoutAnswerInput | undefined;
}
