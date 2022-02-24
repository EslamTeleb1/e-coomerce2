const express=require('express');
const router = new express.Router();
const auth =require('../middleware/auth');
const admin = require('../middleware/admin');
const Product = require('../models/products.js');


router.post('/products',auth,async(req,res)=>{

  
    const product= new Product(req.body);

   console.log("---------------");
    

    try{
        // sendWelcomeEmail(user.email,user.name)
          await product.save();
        //  console.log(product);
       res.status(201).send({product});
    }
    catch(e)
    {
        //res.status(201).send({user});
        res.status(400).send(e);
    }
})


module.exports=router;