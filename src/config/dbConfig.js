import mongoose from 'mongoose'

 export const connectDB = () =>{
    try{
        const connStc = "mongodb://localhost:27017/transaction";
        const conn = mongoose.connect(connStc);

        conn
         ? console.log ("Mongo connected ")
         
         :console.log ("unable to connect ")
    } catch (error){
        console.log(error);
    }
    };

    
 