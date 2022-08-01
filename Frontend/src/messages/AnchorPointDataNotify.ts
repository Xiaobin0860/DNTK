/* eslint-disable */
import type { AnchorPointData } from "./AnchorPointData.ts";

/**
 * CmdId: 4276
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AnchorPointDataNotify {
  AnchorPointList?: AnchorPointData[];
  NextUsableTime?: number;
}