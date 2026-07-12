import type { Response } from "express";
import { log_error } from "../logger/error.logger.js";
import { Prisma } from "../../generated/prisma/client.js";

export const classify_error = (error: unknown) => {
  // Unique constraint violation
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
    return {
      status: 409,
      message: "A record with this value already exists.",
    };
  }

  // Foreign key constraint violation
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2003") {
    return {
      status: 400,
      message: "Referenced record doesn't exist.",
    };
  }

  // Record not found
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
    return {
      status: 404,
      message: "Record not found.",
    };
  }

  // Database connection / initialization issue
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 503,
      message: "Database temporarily unavailable. Please try again later.",
    };
  }

  // Prisma validation errors (wrong query shape, invalid arguments, etc.)
  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      status: 400,
      message: "Invalid request data.",
    };
  }

  // Your custom application errors
  if (error instanceof Error && "statusCode" in error) {
    const status = Number(error.statusCode);

    return {
      status,
      message: status < 500 ? error.message : "An internal error occurred. Please try again later.",
    };
  }

  return {
    status: 500,
    message: "An internal error occurred. Please try again later.",
  };
};

export const handle_controller_error = (res: Response, error: unknown, operation: string) => {
  log_error(`Error while ${operation}:`, error);

  const { status, message } = classify_error(error);

  return res.status(status).json({
    success: false,
    message,
  });
};
