import { findAUser } from "../models/user/UserModel.js";

export const isAuth = async(req, res, next) =>{
    // if valid user then return true otherwise false 
    try{
        const {authorization}= req.headers;
        console.log(authorization);
        //if this authorization id is valide then go the next middlware 
        const user = await findAUser ({_id:authorization});
        console.log(user);
        
        user?._id
        ? next()
        : res.json({
            status: "error",
            message: "unauthorize",
        });
    } catch(error){
        next;
    }
}