import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutVideosInput } from "../inputs/PostCreateNestedOneWithoutVideosInput";

@TypeGraphQL.InputType("VideoCreateInput", {})
export class VideoCreateInput {
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

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutVideosInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutVideosInput;
}
