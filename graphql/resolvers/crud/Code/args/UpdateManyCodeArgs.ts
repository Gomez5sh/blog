import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeUpdateManyMutationInput } from "../../../inputs/CodeUpdateManyMutationInput";
import { CodeWhereInput } from "../../../inputs/CodeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCodeArgs {
  @TypeGraphQL.Field((_type) => CodeUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CodeUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => CodeWhereInput, {
    nullable: true,
  })
  where?: CodeWhereInput | undefined;
}
