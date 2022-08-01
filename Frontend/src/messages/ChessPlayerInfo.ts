/* eslint-disable */
import type { ChessNormalCardInfo } from "./ChessNormalCardInfo.ts";

export interface ChessPlayerInfo {
  Uid?: number;
  FreeRefreshLimit?: number;
  CandidateCardInfoList?: ChessNormalCardInfo[];
  BuildingPoints?: number;
  CandidateIndex?: number;
  FreeRefreshCount?: number;
  RefreshCost?: number;
}