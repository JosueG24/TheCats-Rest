import { NextFunction, Request, Response } from "express";

export default function handleError(error:any, req:Request, res:Response,next:NextFunction){

    res.status(error.status || 500).json({error: error.error || true, message:error.message || "Internal server error"})
}