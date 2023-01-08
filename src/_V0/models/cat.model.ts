import mongoose from "mongoose"
import { myCat } from "../../types"


const catSchema = new mongoose.Schema<myCat>({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    src:{
        type: String,
        required: true,
        unique: true
    }
})

export default mongoose.model("catModel", catSchema)