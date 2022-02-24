const jwt = require('jsonwebtoken')
const User = require('../models/user');

const admin= async(req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded=  jwt.verify(token,"process.env.JWT_SECRET")
        const user= await User.findOne({_id:decoded._id,'tokens.token':token})
        if(!user ||user.type!=="admin")
        {
            throw new Error('')
        }  
    //   if(user.type!=="admin")
    //     {
    //         throw new Error('')
    //     }   
            req.token=token;
            req.user=user
     
      
    }
    catch(e){
       res.status(401).send({error:'please authenticate.'})
    }


    next()
}

module.exports=admin