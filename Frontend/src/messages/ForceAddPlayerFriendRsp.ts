/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.ts";

/**
 * CmdId: 4100
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ForceAddPlayerFriendRsp {
  Retcode?: number;
  TargetFriendBrief?: FriendBrief;
  TargetUid?: number;
}