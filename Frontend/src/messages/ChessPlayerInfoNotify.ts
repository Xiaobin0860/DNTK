/* eslint-disable */
import type { ChessPlayerInfo } from "./ChessPlayerInfo.ts";

/**
 * CmdId: 5332
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChessPlayerInfoNotify {
  PlayerInfo?: ChessPlayerInfo;
}