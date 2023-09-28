import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAudiosInput } from "../inputs/PostCreateOrConnectWithoutAudiosInput";
import { PostCreateWithoutAudiosInput } from "../inputs/PostCreateWithoutAudiosInput";
import { PostUpdateToOneWithWhereWithoutAudiosInput } from "../inputs/PostUpdateToOneWithWhereWithoutAudiosInput";
import { PostUpsertWithoutAudiosInput } from "../inputs/PostUpsertWithoutAudiosInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutAudiosNestedInput", {})
export class PostUpdateOneRequiredWithoutAudiosNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutAudiosInput, {
    nullable: true,
  })
  create?: PostCreateWithoutAudiosInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutAudiosInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutAudiosInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutAudiosInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutAudiosInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutAudiosInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutAudiosInput | undefined;
}
