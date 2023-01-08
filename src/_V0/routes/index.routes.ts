import { Router } from "express";
import {pingPong, Show, Post, editPut, Delete, editPatch, ShowOne } from "../controllers/index.controller";

const routerIndex_V0 = Router();

routerIndex_V0.get("/ping",pingPong)
routerIndex_V0.get("/show",Show)
routerIndex_V0.get("/show/:cat",ShowOne)
routerIndex_V0.post("/new",Post)
routerIndex_V0.put("/edit/:cat",editPut)
routerIndex_V0.delete("/delete/:cat",Delete)

routerIndex_V0.patch("/edit/:cat",editPatch)




export default routerIndex_V0;