/* eslint-disable */
import type { ChatInfo } from "./ChatInfo.ts";

/**
 * CmdId: 4953
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PullPrivateChatRsp {
  ChatInfo?: ChatInfo[];
  Retcode?: number;
}