import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAudioArgs } from "./args/UpdateOneAudioArgs";
import { Audio } from "../../../models/Audio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Audio)
export class UpdateOneAudioResolver {
  @TypeGraphQL.Mutation((_returns) => Audio, {
    nullable: true,
  })
  async updateOneAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneAudioArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
