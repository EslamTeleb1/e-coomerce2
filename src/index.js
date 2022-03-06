const express=require('express');

require('./db/monogoose');

const app=express();
const port=process.env.PORT||3000;
const userRouter=require('./routers/user')
const products=require('./routers/products')
//console.log(process.env.DATABASE_URL);

const path=require('path');
const hbs=require('hbs');

const publicDirectoryPath= path.join(__dirname,'/public');
const viewsPath=path.join(__dirname,'../views')

app.set('view engine','hbs');
app.set('views',viewsPath);
 
app.use(express.static(publicDirectoryPath)); 


////////////

app.use(express.json());

app.use(userRouter);
app.use(products);

app.get('',(req,res)=>{


    res.render('index');

})


app.listen(port,()=>{

    console.log('Server is up  on port : ' + port)
})
