import { type Router, Router as createRouter } from "express";
import { controller } from "./health.module.js";

const router: Router = createRouter();

router.get("/", controller.check);

export default router;
