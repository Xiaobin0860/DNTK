/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.ts";

export interface BlessingRecvPicRecord {
  Nickname?: string;
  RemarkName?: string;
  PicId?: number;
  Uid?: number;
  AvatarId?: number;
  Signature?: string;
  Index?: number;
  IsRecv?: boolean;
  ProfilePicture?: ProfilePicture;
}