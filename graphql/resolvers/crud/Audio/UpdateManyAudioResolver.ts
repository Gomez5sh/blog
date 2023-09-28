import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAudioArgs } from "./args/UpdateManyAudioArgs";
import { Audio } from "../../../models/Audio";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Audio)
export class UpdateManyAudioResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
