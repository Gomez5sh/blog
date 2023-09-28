import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutImagesInput } from "../inputs/PostCreateWithoutImagesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutImagesInput", {})
export class PostCreateOrConnectWithoutImagesInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutImagesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutImagesInput;
}
