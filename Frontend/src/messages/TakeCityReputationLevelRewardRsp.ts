/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2835
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeCityReputationLevelRewardRsp {
  CityId?: number;
  Retcode?: number;
  ItemList?: ItemParam[];
  Level?: number;
}