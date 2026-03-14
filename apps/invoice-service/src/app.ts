import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/invoices", (req, res) => {
  res.send("Invoices API running");
});

export default app;
