import { responseService } from "../../types";
import createCatModel from "../models/createCat.model";

export default async function allCatsOrphansService():Promise<responseService>{
    
    const query = await createCatModel.find({state:"orphan"})
    return {status:200, message: "ok",data:query, error:false}
}

