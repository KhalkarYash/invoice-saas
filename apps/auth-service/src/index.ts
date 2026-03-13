import app from "./app";
import serverless from "serverless-http";
import { config } from "@repo/config";

if (config.nodeEnv !== "production") {
  // const PORT = config.port || 5000;
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Running auth-service locally on PORT: ${PORT}`);
  });
}

const handler = serverless(app);

export { handler };
