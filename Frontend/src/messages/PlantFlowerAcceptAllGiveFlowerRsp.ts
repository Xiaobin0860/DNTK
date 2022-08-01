/* eslint-disable */
import type { PlantFlowerAcceptFlowerResultInfo } from "./PlantFlowerAcceptFlowerResultInfo.ts";

/**
 * CmdId: 8888
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlantFlowerAcceptAllGiveFlowerRsp {
  ScheduleId?: number;
  Retcode?: number;
  AcceptFlowerResultInfoList?: PlantFlowerAcceptFlowerResultInfo[];
}