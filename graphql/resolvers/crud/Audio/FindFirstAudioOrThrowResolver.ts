import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAudioOrThrowArgs } from "./args/FindFirstAudioOrThrowArgs";
import { Audio } from "../../../models/Audio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Audio)
export class FindFirstAudioOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Audio, {
    nullable: true,
  })
  async findFirstAudioOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAudioOrThrowArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
