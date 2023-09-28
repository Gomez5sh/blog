import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkUpdateManyMutationInput } from "../../../inputs/LinkUpdateManyMutationInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLinkArgs {
  @TypeGraphQL.Field((_type) => LinkUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LinkUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => LinkWhereInput, {
    nullable: true,
  })
  where?: LinkWhereInput | undefined;
}
