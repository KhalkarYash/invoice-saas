import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  AWS_REGION: z.string().default("ap-south-1"),

  SERVICE_NAME: z.string().default("unknown-service"),

  LOG_GROUP: z.string().default("invoice-saas"),
  LOG_STREAM: z.string().optional(),

  EVENT_BUS_NAME: z.string().optional(),

  DATABASE_URL: z.string().optional(),

  COGNITO_USER_POOL_ID: z.string(),
  COGNITO_CLIENT_ID: z.string(),
  COGNITO_REGION: z.string(),

  USER_SERVICE_URL: z.string().optional(),
  INVOICE_SERVICE_URL: z.string().optional(),
  PAYMENT_SERVICE_URL: z.string().optional(),
});

const env = envSchema.parse(process.env);

export type Env = typeof env;

export const config = {
  nodeEnv: env.NODE_ENV,

  awsRegion: env.AWS_REGION,

  serviceName: env.SERVICE_NAME,

  logGroup: env.LOG_GROUP,
  logStream: env.LOG_STREAM ?? `${env.SERVICE_NAME || "service"}-${Date.now()}`,

  eventBusName: env.EVENT_BUS_NAME ?? "",

  databaseUrl: env.DATABASE_URL ?? "",

  cognitoUserPoolId: env.COGNITO_USER_POOL_ID,
  cognitoClientId: env.COGNITO_CLIENT_ID,
  cognitoRegion: env.COGNITO_REGION,

  userServiceUrl: env.USER_SERVICE_URL ?? "",
  invoiceServiceUrl: env.INVOICE_SERVICE_URL ?? "",
  paymentServiceUrl: env.PAYMENT_SERVICE_URL ?? "",
};
