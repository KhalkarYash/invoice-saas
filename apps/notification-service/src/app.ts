import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notifications", (req, res) => {
  res.send("Notifications API running");
});

export default app;
