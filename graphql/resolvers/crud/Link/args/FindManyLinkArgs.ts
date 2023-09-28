import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkOrderByWithRelationInput } from "../../../inputs/LinkOrderByWithRelationInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";
import { LinkScalarFieldEnum } from "../../../../enums/LinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLinkArgs {
  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  where?: LinkWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [LinkOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: LinkOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => LinkWhereUniqueInput, {
    nullable: true,
  })
  cursor?: LinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [LinkScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "createdAt" | "updatedAt" | "url" | "postId">
    | undefined;
}
