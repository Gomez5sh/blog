import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkOrderByWithAggregationInput } from "../../../inputs/LinkOrderByWithAggregationInput";
import { LinkScalarWhereWithAggregatesInput } from "../../../inputs/LinkScalarWhereWithAggregatesInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";
import { LinkScalarFieldEnum } from "../../../../enums/LinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLinkArgs {
  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  where?: LinkWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [LinkOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: LinkOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "url" | "postId">;

  @TypeGraphQL.Field((_type) => LinkScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: LinkScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
