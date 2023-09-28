import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutImagesInput } from "../inputs/PostCreateNestedOneWithoutImagesInput";

@TypeGraphQL.InputType("ImageCreateInput", {})
export class ImageCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutImagesInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutImagesInput;
}
