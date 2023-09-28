import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLinksInput } from "../inputs/PostCreateOrConnectWithoutLinksInput";
import { PostCreateWithoutLinksInput } from "../inputs/PostCreateWithoutLinksInput";
import { PostUpdateToOneWithWhereWithoutLinksInput } from "../inputs/PostUpdateToOneWithWhereWithoutLinksInput";
import { PostUpsertWithoutLinksInput } from "../inputs/PostUpsertWithoutLinksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutLinksNestedInput", {})
export class PostUpdateOneRequiredWithoutLinksNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutLinksInput, {
    nullable: true,
  })
  create?: PostCreateWithoutLinksInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutLinksInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutLinksInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutLinksInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutLinksInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutLinksInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutLinksInput | undefined;
}
