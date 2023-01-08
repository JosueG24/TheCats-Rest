import { responseService } from "../../types";
import createCatModel from "../models/createCat.model";

export default async function allCatsService():Promise<responseService>{
    
    const query = await createCatModel.find()
    return {status:200, message: "ok",data:query, error:false}
}

