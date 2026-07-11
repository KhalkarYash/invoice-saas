import express, { type Router } from "express";
import { promises as fs } from "fs";
import path from "path";

const router: Router = express.Router();
const logsDirectory = path.join(process.cwd(), "logs");

router.get("/", async (_req, res, next) => {
  try {
    const files = await fs.readdir(logsDirectory);

    res.json({ files });
  } catch (error) {
    next(error);
  }
});

router.use("/", express.static(logsDirectory));

export default router;
