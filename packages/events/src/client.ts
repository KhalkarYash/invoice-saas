import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { config } from "@repo/config";

export const eventBridgeClient = new EventBridgeClient({
  region: config.awsRegion,
});
