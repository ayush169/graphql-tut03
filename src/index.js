import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloServer } from "./config/apolloServer.js";

const app = express();
const PORT = process.env.PORT || 4000;

async function startServer() {
  const server = await createApolloServer();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

startServer().catch(console.error);
