import express, { type Express } from "express";
import cors, { type CorsOptions } from "cors";
import { env_config } from "./config/env-config.js";
import appRouter from "./routes/index.js";

const app: Express = express();
const API_PREFIX = `/api/${env_config.api_version}`;

const allowedOrigins = env_config.allowed_origin.split(",").map((origin) => origin.trim());

const cors_options: CorsOptions = {
  origin(origin, callback) {
    // Allow requests without an Origin header (e.g. curl, Postman)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("Not allowed by CORS"));
  },
};

app.use(cors(cors_options));
app.use(API_PREFIX, appRouter);

export default app;
