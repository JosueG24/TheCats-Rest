import { Request, Response, NextFunction } from "express"
import catModel from "../models/cat.model"
import { myCat } from "../../types"

export async function pingPong(req: Request, res: Response, next:NextFunction){
    try {// =====================
        return res.status(200).json({message:"ok", data:"pong"})
        // =====================
    } catch (error) {
        next({status:500, message:"an error"})
    }
}

export async function Show(req:Request, res:Response, next:NextFunction){
    try { // ==================
        const users = await catModel.find()
        return res.status(200).json({message:"ok", data:users, error:null})
        // =====================
    } catch (error) {
        next()
    }
}

export async function ShowOne(req:Request, res:Response, next:NextFunction){
    try {// ====================
        const {cat} = req.params
        const itemFind = await catModel.findOne({name: cat})
        if(itemFind === null){
            next({status:404, message:"no encontrado"})
            return
        }
        return res.status(200).json({
            message: "Usuario encontrado",
            itemFind
        })
        // =====================
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }
}

export async function Post(req:Request, res:Response, next:NextFunction){
    try {// ==============
        const {name, src} = req.body;
        if(typeof name!=="string" || typeof src !== "string"){
            next({status:400, message:"datos incorrectos"})
            return
        }
        const itemCreate = new catModel({
            name,
            src
        })
        await itemCreate.save();
        console.log({itemCreate})
        return res.status(200).json({ message:"ok", data:itemCreate, error:null})
    // =====================
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }
}

export async function editPut(req:Request, res:Response, next:NextFunction){
    try {// ====================
        const {cat} = req.params
        const body = req.body
        if(typeof body.name!=="string" && typeof body.src!=="string"){
            next({status:400, message:"datos incorrectos"})
            return
        }
        if(body.name.length <5 && body.src.length <5){
            next({status:400, message:"datos muy cortos"})
            return
        }

        const itemFind = await catModel.findOne({name: cat})
        console.log({itemFind})
        if(itemFind == null){
            next({status:404, message:"no encontrado"})
            return
        }

        const bodyEdit:myCat ={
            name : itemFind.name,
            src:itemFind.src
        }
        if(typeof body.name =="string" && body.name.length > 4){
            bodyEdit.name = body.name
        }
        if(typeof body.src=="string" && body.src.length > 4){
            bodyEdit.src = body.src
        }
        const itemUpdated = await catModel.findOneAndUpdate({name:cat}, bodyEdit);
    
        return res.json({
            cat,
            bodyEdit,
            itemUpdated
        })
    // =====================
    } catch (error) {
        console.log({error})
        next({status:500, message:"an error"})
    }
}

export async function Delete(req:Request, res:Response, next:NextFunction){
    try {// ====================
        const {cat} = req.params;
        const userDeleted = await catModel.findOneAndDelete({name:cat});
        if(userDeleted == null){
            next({status:404, message:"not found"})
            return
        }
        return res.json({
            message: "usuario eliminado",
            userDeleted
        });
        // =====================
    } catch (error) {
        console.log({error})
        next({status:500, message:"an error"})
    }
}

export async function editPatch(req:Request, res:Response, next:NextFunction){
    return editPut(req, res, next)
}