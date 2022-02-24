const express=require('express');
const router=new express.Router();
const auth =require('../middleware/auth');
const admin = require('../middleware/admin');
const User = require('../models/user.js');

router.get('/test',(req,res)=>{

    res.send('from sepreted file !');
})



router.post('/users',async(req,res)=>{

  
    const user= new User(req.body);
    try{
        // sendWelcomeEmail(user.email,user.name)
          await user.save();
        const token = await user.generateAuhtToken();
       res.status(201).send({user,token});
    }
    catch(e)
    {
        //res.status(201).send({user});
        res.status(400).send(e);
    }
})


router.post('/users/login',async(req,res)=>{

      try{
        
        const user= await User.findByCredentails(req.body.email,req.body.password);

       const  token= await user.generateAuhtToken();

       res.status(200).send({user,token});
    }
    catch(e)
    {

        res.status(400).send(' '+e);
    }
})

router.post('/users/logout',auth,async(req,res)=>{

   // console.log('req.token : ',req.user.token);
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
           
        return token.token !==req.token });
        await req.user.save();
        res.send();
    }
    

    catch(e){
       
        res.status(500).send(e);
    }
})

router.get('/users/me',admin,async(req,res)=>{

    res.status(200).send(req.user);
 })



 router.post('/users/logoutall',auth,async(req,res)=>{

    try{

      req.user.tokens=[];

      await req.user.save();
      res.status(200).send();
    }
    catch(e)
    {
        res.status(500).send()
    }
      
})

router.patch('/users/me',auth,async(req,res)=>{

    const updates= Object.keys(req.body);

    const AllowedUpdates= ['name','email','password','age'];

    const isValidUpdates = updates.every((update)=>AllowedUpdates.includes(update));

    if(!isValidUpdates)
    {
        return res.status(404).send(" it's not valid updates !!! ")
    }

    try{

        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

          // const req.user= await User.findById(req.user.id);

           updates.forEach((update)=>req.user[update]=req.body[update])

            await req.user.save();

        // if(!req.user)
        // {
        //    return res.status(404).send('not a user')
        // } 
        res.send(req.user);
    }
    catch(e)
    {
        res.status(404).send(e)
    }
})














module.exports=router;