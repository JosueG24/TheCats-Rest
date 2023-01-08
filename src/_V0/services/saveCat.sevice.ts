import { newCatRequest, responseService } from "../../types"
import createCatModel from "../models/createCat.model";

function validation(data: newCatRequest):boolean{
    const {name,source,owner} = data;
    if(typeof name !== "string" || name == "" ) return false
    if(typeof source !== "string" || source == "" ) return false

    return true
}

export default async function saveCatService(data:{name:string, source:string, owner:string | null}):Promise<responseService>{
    if(validation(data) == false){
        return {status:400, message: "bad request",data:null, error:true}
    }

    let itemCreate;
    if(data.owner == ""){
         itemCreate = new createCatModel({
            name: data.name,
            source: data.source,
            state: "orphan",
            characteristics:{}
        })
    }else{
         itemCreate = new createCatModel({
            name: data.name,
            source: data.source,
            state: "adopted",
            owner: data.owner,
            characteristics:{}
        })           
    }
    await itemCreate.save();
    return {status:200, message: "ok",data:itemCreate, error:false}
}