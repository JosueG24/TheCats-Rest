import { Request, Response, NextFunction } from "express"
import express from "express"
import cors from "cors"

import routerIndex_V0 from "./_V0/routes/index.routes";
import pruebasRouter_V0 from "./_V0/routes/pruebas.routes";

import handleError from "./middelwares/HandleErrors";


const thePort = process.env.PORT || 4000

const app = express();
// other
app.set("port", thePort)

// middlewares
app.use(cors());
app.use(express.json())

// routes
app.use("/api/V0/",routerIndex_V0);
app.use("/api/V0/",pruebasRouter_V0);

// handle errors
app.use(handleError)

export default app;