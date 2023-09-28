import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyAuthorInputEnvelope } from "../inputs/LikeCreateManyAuthorInputEnvelope";
import { LikeCreateOrConnectWithoutAuthorInput } from "../inputs/LikeCreateOrConnectWithoutAuthorInput";
import { LikeCreateWithoutAuthorInput } from "../inputs/LikeCreateWithoutAuthorInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutAuthorInput } from "../inputs/LikeUpdateManyWithWhereWithoutAuthorInput";
import { LikeUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutAuthorInput";
import { LikeUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutAuthorInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateManyWithoutAuthorNestedInput", {})
export class LikeUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field((_type) => [LikeCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: LikeCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  connectOrCreate?: LikeCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  upsert?: LikeUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => LikeCreateManyAuthorInputEnvelope, {
    nullable: true,
  })
  createMany?: LikeCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereUniqueInput], {
    nullable: true,
  })
  set?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereUniqueInput], {
    nullable: true,
  })
  delete?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereUniqueInput], {
    nullable: true,
  })
  connect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  update?: LikeUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  updateMany?: LikeUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: LikeScalarWhereInput[] | undefined;
}
