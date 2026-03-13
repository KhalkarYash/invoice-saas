import app from "./app";
import serverless from "serverless-http";
import { config } from "@repo/config";

if (config.nodeEnv !== "production") {
  // const PORT = config.port || 5000;
  const PORT = 5003;
  app.listen(PORT, () => {
    console.log(`Running payment-service locally on PORT: ${PORT}`);
  });
}

const handler = serverless(app);

export { handler };
