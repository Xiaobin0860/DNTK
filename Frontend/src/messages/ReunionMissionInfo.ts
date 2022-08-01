/* eslint-disable */
import type { ReunionWatcherInfo } from "./ReunionWatcherInfo.ts";

export interface ReunionMissionInfo {
  CurDayWatcherList?: ReunionWatcherInfo[];
  CurScore?: number;
  IsTakenReward?: boolean;
  IsTakenRewardList?: boolean[];
  NextRefreshTime?: number;
  IsFinished?: boolean;
  MissionId?: number;
  WatcherList?: ReunionWatcherInfo[];
}