import express from 'express'

import { getAllUserTransactions, insertTrans,deleteManyTrans } from '../models/transaction/transModel.js';
const router = express();

//read 

router.get("/",  async(req, res, next ) =>{
    try{

        const {authorization }= req.headers;
        const trans = await getAllUserTransactions({userId: authorization});
    
         res.json({
            status: "success",
            message: "post method to do ",
            trans,
        })
        

    }catch(error){
        next(error)

    }
});

//create 
router.post("/",  async(req, res, next ) =>{
    try{
        console.log(req.body)
        const {authorization} = req.headers
        const result = await insertTrans({...req.body, userId: authorization});
    
        result?._id?
        res.json({
            status: "success",
            message: "post method to do "
        })
        :res.json({
            status: "error",
            message: "transaction added successfully ",
        });

    }catch(error){
        console.log(error)
        next(error)

    }
});

// delete 
router.delete("/", async (req, res, next) => {
    try {
      console.log(req.body);
      const { authorization } = req.headers;
  
      const result = await deleteManyTrans(req.body, authorization);
      console.log(result);
      result?.deletedCount
        ? res.json({
            status: "success",
            message: result.deletedCount + " item(s) delted ",
          })
        : res.json({
            status: "error",
            message: "Nothing happened",
          });
    } catch (error) {
      next(error);
    }
  });

export default router;
