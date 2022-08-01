/* eslint-disable */
import type { Unk2700MOFABPNGIKP } from "./Unk2700_MOFABPNGIKP.ts";
import type { Unk2800BEMANDBNPJB } from "./Unk2800_BEMANDBNPJB.ts";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo.ts";

/**
 * CmdId: 24601
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface Unk2800GDDLBKEENNA {
  IsNewRecord?: boolean;
  Reason?: Unk2700MOFABPNGIKP;
  SettleInfoList?: Unk2800BEMANDBNPJB[];
  ScoreList?: ExhibitionDisplayInfo[];
  Unk2700CDDONJJMFCI?: number;
}