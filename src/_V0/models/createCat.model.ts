import mongoose from "mongoose";

/* valores requeridos:
    name,source,state
    Valores opcionales
    characteristics
    Datos obligatorios al momento de la adopcion
    change state, owner, dateAdoption
*/

const createCatSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
        minlength: 3
    },
    source:{
        type:String,
        required: true,
        unique: true
    },
    state:{
        type:String,
        enum:["orphan","adopted"],
        required: true,
    },
    owner:{
        type:String,
        default:null
    },
    dateAdoption:{
        type:Number,
        default:null
    },
    characteristics:{}

})

export default mongoose.model("createCatSchema", createCatSchema)