import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutVideosInput } from "../inputs/PostCreateOrConnectWithoutVideosInput";
import { PostCreateWithoutVideosInput } from "../inputs/PostCreateWithoutVideosInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutVideosInput", {})
export class PostCreateNestedOneWithoutVideosInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutVideosInput, {
    nullable: true,
  })
  create?: PostCreateWithoutVideosInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutVideosInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutVideosInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
