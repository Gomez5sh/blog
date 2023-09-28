import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteOrderByWithRelationInput } from "../../../inputs/QuoteOrderByWithRelationInput";
import { QuoteWhereInput } from "../../../inputs/QuoteWhereInput";
import { QuoteWhereUniqueInput } from "../../../inputs/QuoteWhereUniqueInput";
import { QuoteScalarFieldEnum } from "../../../../enums/QuoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  where?: QuoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [QuoteOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: QuoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: true,
  })
  cursor?: QuoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "createdAt" | "updatedAt" | "content" | "author" | "postId">
    | undefined;
}
