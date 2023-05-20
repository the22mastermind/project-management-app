import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { connectDB } from "./config/db";
import { schema } from "./schema/schema";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
