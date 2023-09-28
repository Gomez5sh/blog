import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeOrderByWithAggregationInput } from "../../../inputs/CodeOrderByWithAggregationInput";
import { CodeScalarWhereWithAggregatesInput } from "../../../inputs/CodeScalarWhereWithAggregatesInput";
import { CodeWhereInput } from "../../../inputs/CodeWhereInput";
import { CodeScalarFieldEnum } from "../../../../enums/CodeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCodeArgs {
  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  where?: CodeWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CodeOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CodeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "createdAt" | "updatedAt" | "content" | "language" | "postId"
  >;

  @TypeGraphQL.Field((_type) => CodeScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CodeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
