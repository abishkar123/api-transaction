import UserSchema from "./UserSchema.js"


//Create user 
export const insertUser = obj =>{
    return UserSchema(obj).save();
};

//login user

export const findAUser = obj =>{
    return UserSchema.findOne(obj);
}

// obj -> email and pin
//delete user