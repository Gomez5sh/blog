import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FileWhereInput } from "../../inputs/FileWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountFilesArgs {
  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;
}
