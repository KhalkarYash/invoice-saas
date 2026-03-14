import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/payments", (req, res) => {
  res.send("Payments API running");
});

export default app;
