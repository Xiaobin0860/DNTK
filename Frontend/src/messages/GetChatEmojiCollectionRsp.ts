/* eslint-disable */
import type { ChatEmojiCollectionData } from "./ChatEmojiCollectionData.ts";

/**
 * CmdId: 4033
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetChatEmojiCollectionRsp {
  Retcode?: number;
  ChatEmojiCollectionData?: ChatEmojiCollectionData;
}