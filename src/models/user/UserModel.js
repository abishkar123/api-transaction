import UserSchema from "./UserSchema.js"


//Create user 
export const insertUser = obj =>{
    return UserSchema(obj).save();
};

//login user

export const updateUser = obj =>{
    return UserSchema(obj).find();
}
//delete user