import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutImagesInput } from "../inputs/PostCreateOrConnectWithoutImagesInput";
import { PostCreateWithoutImagesInput } from "../inputs/PostCreateWithoutImagesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutImagesInput", {})
export class PostCreateNestedOneWithoutImagesInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutImagesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutImagesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
