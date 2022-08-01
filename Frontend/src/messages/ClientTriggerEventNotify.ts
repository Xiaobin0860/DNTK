/* eslint-disable */
import type { EventTriggerType } from "./EventTriggerType.ts";

/**
 * CmdId: 148
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ClientTriggerEventNotify {
  ForceId?: number;
  EventType?: EventTriggerType;
}