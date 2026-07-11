import { type Router, Router as createRouter } from "express";
import logsRouter from "../modules/logs/logs.routes.js";

const router: Router = createRouter();

router.use("/logs", logsRouter);

export default router;
