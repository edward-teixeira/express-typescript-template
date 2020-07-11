import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/ApiRouter";

const app = express();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Entry point
app.use("/api", apiRouter);

export default app;