import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAudioArgs } from "./args/AggregateAudioArgs";
import { Audio } from "../../../models/Audio";
import { AggregateAudio } from "../../outputs/AggregateAudio";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Audio)
export class AggregateAudioResolver {
  @TypeGraphQL.Query((_returns) => AggregateAudio, {
    nullable: false,
  })
  async aggregateAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAudioArgs,
  ): Promise<AggregateAudio> {
    return getPrismaFromContext(ctx).audio.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
