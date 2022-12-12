import TransSchema from "./TransSchema.js"

//CRUD

//insert 
export const insertTrans = obj =>{
    return TransSchema(obj).save()
}

// real al transcation @ filter must be on object 

export const getAllUserTransactions = (filter) =>{
    return TransSchema.find(filter);
};

// Delete 
export const deleteManyTrans = (ids, userId) => {
    return TransSchema.deleteMany({
      _id: {
        $in: ids,
      },
      userId,
    });
  };