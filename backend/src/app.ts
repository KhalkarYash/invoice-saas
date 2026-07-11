import express, { type Express } from "express";
import cors from "cors";
import { env_config } from "./config/env-config.js";
import appRouter from "./routes/index.js";

const app: Express = express();
const API_PREFIX = `/api/${env_config.api_version}`;

const cors_options = {};

app.use(cors(cors_options));
app.use(API_PREFIX, appRouter);

export default app;
