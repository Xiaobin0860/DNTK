/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2681
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeAchievementGoalRewardRsp {
  Retcode?: number;
  IdList?: number[];
  ItemList?: ItemParam[];
}