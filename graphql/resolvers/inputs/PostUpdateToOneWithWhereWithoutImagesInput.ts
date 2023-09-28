import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutImagesInput } from "../inputs/PostUpdateWithoutImagesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutImagesInput", {})
export class PostUpdateToOneWithWhereWithoutImagesInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutImagesInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutImagesInput;
}
