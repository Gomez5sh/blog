import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCodesInput } from "../inputs/PostCreateOrConnectWithoutCodesInput";
import { PostCreateWithoutCodesInput } from "../inputs/PostCreateWithoutCodesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutCodesInput", {})
export class PostCreateNestedOneWithoutCodesInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutCodesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutCodesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutCodesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutCodesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
