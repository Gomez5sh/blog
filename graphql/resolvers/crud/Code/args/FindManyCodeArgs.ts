import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeOrderByWithRelationInput } from "../../../inputs/CodeOrderByWithRelationInput";
import { CodeWhereInput } from "../../../inputs/CodeWhereInput";
import { CodeWhereUniqueInput } from "../../../inputs/CodeWhereUniqueInput";
import { CodeScalarFieldEnum } from "../../../../enums/CodeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCodeArgs {
  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  where?: CodeWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CodeOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CodeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CodeWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CodeWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [CodeScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        "id" | "createdAt" | "updatedAt" | "content" | "language" | "postId"
      >
    | undefined;
}
