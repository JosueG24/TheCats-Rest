import { responseService } from "../../types";
import createCatModel from "../models/createCat.model";

export default async function allCatsAdoptedsService():Promise<responseService>{
    
    const query = await createCatModel.find({state:"adopted"})
    return {status:200, message: "ok",data:query, error:false}
}

