import { Router } from "express";
import { saveCat, allCats, allCatsAdopteds, allCatsOrphans } from "../controllers/pruebas.controller";

const pruebasRouter_V0 = Router();

pruebasRouter_V0.post("/saveCat",saveCat)
pruebasRouter_V0.get("/all-cats",allCats)
pruebasRouter_V0.get("/all-cats/orphans",allCatsOrphans)
pruebasRouter_V0.get("/all-cats/adopteds",allCatsAdopteds)


export default pruebasRouter_V0;
