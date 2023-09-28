import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAudioArgs } from "./args/DeleteManyAudioArgs";
import { Audio } from "../../../models/Audio";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Audio)
export class DeleteManyAudioResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
