import { config } from "dotenv";
config();
import app from "./app.js";
import { env_config } from "./config/env-config.js";
import serverless from "serverless-http";
import type { APIGatewayProxyEvent, Context } from "aws-lambda";
import logger from "./utils/logger/logger.js";

const { port, node_env } = env_config;

const IS_DEV = node_env === "development";

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const serverless_handler = serverless(app);
  return serverless_handler(event, context);
};

if (IS_DEV) {
  (async () => {
    try {
      // db connect here
      // logger.info("Database connected successfully!")
      app.listen(port, () => {
        logger.info(`Server is running on port ${port}`);
      });
    } catch (error) {
      const error_message = error instanceof Error ? error.message : String(error);
      const error_stack = error instanceof Error ? error.stack : undefined;
      logger.error("Dev server startup failed", {
        error: error_message,
        stack: error_stack,
      });
      setTimeout(() => {
        process.exit(1);
      }, 500);
    }
  })();
}
