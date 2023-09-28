import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCodesInput } from "../inputs/PostCreateOrConnectWithoutCodesInput";
import { PostCreateWithoutCodesInput } from "../inputs/PostCreateWithoutCodesInput";
import { PostUpdateToOneWithWhereWithoutCodesInput } from "../inputs/PostUpdateToOneWithWhereWithoutCodesInput";
import { PostUpsertWithoutCodesInput } from "../inputs/PostUpsertWithoutCodesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCodesNestedInput", {})
export class PostUpdateOneRequiredWithoutCodesNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutCodesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutCodesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutCodesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutCodesInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutCodesInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutCodesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutCodesInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutCodesInput | undefined;
}
