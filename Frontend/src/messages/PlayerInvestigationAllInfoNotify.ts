/* eslint-disable */
import type { Investigation } from "./Investigation.ts";
import type { InvestigationTarget } from "./InvestigationTarget.ts";

/**
 * CmdId: 1928
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerInvestigationAllInfoNotify {
  InvestigationList?: Investigation[];
  InvestigationTargetList?: InvestigationTarget[];
}