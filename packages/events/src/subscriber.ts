import { EventPayloadMap } from "./event-map";

interface EventBridgeEvent {
  "detail-type": string;
  detail: unknown;
  source: string;
  version: string;
  id: string;
  account: string;
  time: string;
  region: string;
}

export const subscribeEvent = <T extends keyof EventPayloadMap>(
  eventType: T,
  handler: (payload: EventPayloadMap[T]) => Promise<void> | void,
) => {
  return async (event: EventBridgeEvent) => {
    if (event["detail-type"] !== eventType) {
      return;
    }

    const payload = event.detail as EventPayloadMap[T];

    await handler(payload);
  };
};
