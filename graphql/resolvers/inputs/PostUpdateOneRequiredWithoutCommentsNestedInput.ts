import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/PostUpdateToOneWithWhereWithoutCommentsInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCommentsNestedInput", {})
export class PostUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutCommentsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutCommentsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutCommentsInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutCommentsInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutCommentsInput | undefined;
}
