import logger from "./logger.js";

export const log_error = (message: string, error_details?: Error) => {
  logger.error(message, {
    name: error_details?.name,
    message: error_details?.message,
    stack: error_details?.stack,
  });
};
