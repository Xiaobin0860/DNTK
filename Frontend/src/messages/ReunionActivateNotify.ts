/* eslint-disable */
import type { ReunionBriefInfo } from "./ReunionBriefInfo.ts";

/**
 * CmdId: 5085
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ReunionActivateNotify {
  IsActivate?: boolean;
  ReunionBriefInfo?: ReunionBriefInfo;
}