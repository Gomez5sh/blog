import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileOrderByWithRelationInput } from "../../../inputs/FileOrderByWithRelationInput";
import { FileWhereInput } from "../../../inputs/FileWhereInput";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";
import { FileScalarFieldEnum } from "../../../../enums/FileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFileOrThrowArgs {
  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [FileOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: FileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: true,
  })
  cursor?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "createdAt" | "updatedAt" | "url" | "postId">
    | undefined;
}
