import { config } from "dotenv";
config();
import app from "./app.js";
import { env_config } from "./config/env-config.js";
import serverless from "serverless-http";
import type { APIGatewayProxyEvent, Context } from "aws-lambda";
import logger from "./middleware/logger.middleware.js";

const { port, node_env, api_version } = env_config;

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const serverless_handler = serverless(app);
  return serverless_handler(event, context);
};

if (node_env === "development") {
  const start_server = async () => {
    try {
      // db connect here
      // logger.info("Database connected successfully!")
      app.listen(port, () => {
        logger.info(`Server is running on port ${port}`);
        console.log(
          `Error logs available at http://localhost:${port}/api/${api_version}/logs/error.log`,
        );
        console.log(
          `Combined logs available at http://localhost:${port}/api/${api_version}/logs/combined.log`,
        );
      });
    } catch (error) {
      logger.error("Error while connecting to the database", error);
      setTimeout(() => {
        process.exit(1);
      }, 500);
    }
  };
  start_server();
}
