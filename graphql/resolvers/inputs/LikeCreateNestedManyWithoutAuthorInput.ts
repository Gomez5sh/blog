import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyAuthorInputEnvelope } from "../inputs/LikeCreateManyAuthorInputEnvelope";
import { LikeCreateOrConnectWithoutAuthorInput } from "../inputs/LikeCreateOrConnectWithoutAuthorInput";
import { LikeCreateWithoutAuthorInput } from "../inputs/LikeCreateWithoutAuthorInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateNestedManyWithoutAuthorInput", {})
export class LikeCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => [LikeCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: LikeCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  connectOrCreate?: LikeCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => LikeCreateManyAuthorInputEnvelope, {
    nullable: true,
  })
  createMany?: LikeCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereUniqueInput], {
    nullable: true,
  })
  connect?: LikeWhereUniqueInput[] | undefined;
}
