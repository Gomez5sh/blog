import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCreateManyPostInputEnvelope } from "../inputs/LinkCreateManyPostInputEnvelope";
import { LinkCreateOrConnectWithoutPostInput } from "../inputs/LinkCreateOrConnectWithoutPostInput";
import { LinkCreateWithoutPostInput } from "../inputs/LinkCreateWithoutPostInput";
import { LinkScalarWhereInput } from "../inputs/LinkScalarWhereInput";
import { LinkUpdateManyWithWhereWithoutPostInput } from "../inputs/LinkUpdateManyWithWhereWithoutPostInput";
import { LinkUpdateWithWhereUniqueWithoutPostInput } from "../inputs/LinkUpdateWithWhereUniqueWithoutPostInput";
import { LinkUpsertWithWhereUniqueWithoutPostInput } from "../inputs/LinkUpsertWithWhereUniqueWithoutPostInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";

@TypeGraphQL.InputType("LinkUpdateManyWithoutPostNestedInput", {})
export class LinkUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [LinkCreateWithoutPostInput], {
    nullable: true,
  })
  create?: LinkCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: LinkCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: LinkUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => LinkCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: LinkCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [LinkWhereUniqueInput], {
    nullable: true,
  })
  set?: LinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: LinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkWhereUniqueInput], {
    nullable: true,
  })
  delete?: LinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkWhereUniqueInput], {
    nullable: true,
  })
  connect?: LinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: LinkUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: LinkUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: LinkScalarWhereInput[] | undefined;
}
