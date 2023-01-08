import mongoose from "mongoose"

const mongouri = "mongodb+srv://JosueG:luticheforever@thecats.pkytqdj.mongodb.net/?retryWrites=true&w=majority"

export async function ConectDB(){
        mongoose.set('strictQuery', true);
        await mongoose.connect(mongouri)
        console.log("Base de datos conectada")
}