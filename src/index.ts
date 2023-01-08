import app from "./app";
import { ConectDB } from "./DB";

async function Main(){
    try {
        await ConectDB();        
        app.listen(app.get("port"), ()=>{
            console.log("servidor a la escucha en el puerto "+app.get("port"))
        })
    } catch (error) {
        console.log(error)
    }
    
}

Main();