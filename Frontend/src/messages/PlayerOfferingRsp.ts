/* eslint-disable */
import type { PlayerOfferingData } from "./PlayerOfferingData.ts";
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2917
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerOfferingRsp {
  ItemList?: ItemParam[];
  Retcode?: number;
  OfferingData?: PlayerOfferingData;
}