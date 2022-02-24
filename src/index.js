const express=require('express');

require('./db/monogoose');

const app=express();
const port=process.env.PORT||3000;
const userRouter=require('./routers/user')
const products=require('./routers/products')
//console.log(process.env.DATABASE_URL);


app.use(express.json());

app.use(userRouter);
app.use(products);
app.listen(port,()=>{

    console.log('Server is up  on port : ' + port)
})
