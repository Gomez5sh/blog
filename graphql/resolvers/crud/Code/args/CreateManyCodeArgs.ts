import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CodeCreateManyInput } from "../../../inputs/CodeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCodeArgs {
  @TypeGraphQL.Field((_type) => [CodeCreateManyInput], {
    nullable: false,
  })
  data!: CodeCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
