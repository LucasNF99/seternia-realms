import { classes } from "@automapper/classes";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { UserSummary } from "@/domain/entities/UserSummary";
import { UserSummaryResponse } from "@/data/models/responses/UserSummaryResponse";

export const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(
  mapper,
  UserSummaryResponse,
  UserSummary,
  forMember(
    (item) => item.id,
    mapFrom((src) => src.id)
  )
);
