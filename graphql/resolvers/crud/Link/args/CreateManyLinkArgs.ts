import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinkCreateManyInput } from "../../../inputs/LinkCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLinkArgs {
  @TypeGraphQL.Field((_type) => [LinkCreateManyInput], {
    nullable: false,
  })
  data!: LinkCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
