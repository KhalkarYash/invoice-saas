import {
  CloudWatchLogsClient,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  PutLogEventsCommand,
  ResourceAlreadyExistsException,
} from "@aws-sdk/client-cloudwatch-logs";

import { config } from "@repo/config";

const client = new CloudWatchLogsClient({
  region: config.awsRegion,
});

const logGroupName = config.logGroup;
const logStreamName = config.logStream;

let sequenceToken: string | undefined;
let initialized: Promise<void> | undefined;

const ensureLogGroupAndStream = async (): Promise<void> => {
  try {
    await client.send(new CreateLogGroupCommand({ logGroupName }));
  } catch (err) {
    if (!(err instanceof ResourceAlreadyExistsException)) throw err;
  }

  try {
    await client.send(
      new CreateLogStreamCommand({
        logGroupName,
        logStreamName,
      }),
    );
  } catch (err) {
    if (!(err instanceof ResourceAlreadyExistsException)) throw err;
  }
};

export const sendLog = async (message: string): Promise<void> => {
  initialized ??= ensureLogGroupAndStream();
  await initialized;

  const command = new PutLogEventsCommand({
    logGroupName,
    logStreamName,
    sequenceToken,
    logEvents: [{ message, timestamp: Date.now() }],
  });

  const response = await client.send(command);
  sequenceToken = response.nextSequenceToken;
};
