import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { eventBridgeClient } from "./client";
import { config } from "@repo/config";
import { EventPayloadMap } from "./event-map";

export const publishEvent = async <T extends keyof EventPayloadMap>(
  eventType: T,
  payload: EventPayloadMap[T],
) => {
  const command = new PutEventsCommand({
    Entries: [
      {
        Source: config.serviceName,
        DetailType: eventType,
        Detail: JSON.stringify(payload),
        EventBusName: config.eventBusName,
      },
    ],
  });

  await eventBridgeClient.send(command);
};
