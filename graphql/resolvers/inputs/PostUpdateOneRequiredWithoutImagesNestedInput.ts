import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutImagesInput } from "../inputs/PostCreateOrConnectWithoutImagesInput";
import { PostCreateWithoutImagesInput } from "../inputs/PostCreateWithoutImagesInput";
import { PostUpdateToOneWithWhereWithoutImagesInput } from "../inputs/PostUpdateToOneWithWhereWithoutImagesInput";
import { PostUpsertWithoutImagesInput } from "../inputs/PostUpsertWithoutImagesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutImagesNestedInput", {})
export class PostUpdateOneRequiredWithoutImagesNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutImagesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutImagesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutImagesInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutImagesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutImagesInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutImagesInput | undefined;
}
