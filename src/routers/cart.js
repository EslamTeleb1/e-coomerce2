
const router = require("../../views/viewsPath.js")
const auth =require('../middleware/auth');
const Product = require('../models/products.js');


router.post('/cart',admin,async(req,res)=>{

  
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


router.get('/products',auth,async(req,res)=>{

    res.render("product-list")
})

module.exports=router;