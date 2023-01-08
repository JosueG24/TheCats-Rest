import { RequestHandler } from "express"
import { newCatRequest } from "../../types"

import saveCatService from "../services/saveCat.sevice"
import allCatsService from "../services/allCats.services"
import allCatsOrphansService from "../services/allCatsOrphans.service"
import allCatsAdoptedsService from "../services/allCatsAdopteds.service"


export const saveCat:RequestHandler = async (req, res, next)=>{
    try {
        const {name,source,owner} = req.body as newCatRequest
        const resp = await saveCatService({name,source, owner})
        if(resp.status == 400){
            next({status:400, message:"Bad Request"})    
            return
        }
        if(resp.status == 200){
            return res.status(200).json({message:"Ok", data:resp.data})    
        }
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }

    next();
}

export const allCats:RequestHandler = async(req, res, next)=>{
    try {
        const resp = await allCatsService()
        if(resp.status == 200){
            return res.status(200).json({message:"Ok", data:resp.data})    
        }
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }

    next();
}

export const allCatsOrphans:RequestHandler = async(req, res, next)=>{
    try {
        const resp = await allCatsOrphansService()
        if(resp.status == 200){
            return res.status(200).json({message:"Ok", data:resp.data})    
        }
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }

    next();
}

export const allCatsAdopteds:RequestHandler = async(req, res, next)=>{
    try {
        const resp = await allCatsAdoptedsService()
        if(resp.status == 200){
            return res.status(200).json({message:"Ok", data:resp.data})    
        }
    } catch (error) {
        next({status:500, message:"Internal server error"})
    }
    next();
}