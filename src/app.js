import express from "express";
import conectDB from "../src/config/db.js";
import dotenv from 'dotenv'

import workshopRouter from "./routes/workshopRouter.js";
import vehicleRouter from "./routes/vehicleRouter.js";
import maintenanceRouter from "./routes/maintenanceRouter.js";

const port = 3000;
dotenv.config()
conectDB();
const app = express();
app.use(express.json());

app.use("/workshop", workshopRouter);
app.use("/vehicle", vehicleRouter);
app.use("/maintenance", maintenanceRouter);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
