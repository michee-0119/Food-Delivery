import { configDotenv } from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./routers";
import { foodOrderRouter } from "./routers";
import { foodRouter } from "./routers";
import { categoryRouter } from "./routers";
import connectToMongoDb from "./mongoDB";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/authentication", userRouter);
app.use("/food", foodRouter);

connectToMongoDb();

app.listen(10000, () => {
  console.log("http://localhost:10000");
});
