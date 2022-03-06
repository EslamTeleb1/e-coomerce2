


const express= require('express');
const path=require('path');
const hbs=require('hbs');

const publicDirectoryPath= path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../views')
const app=express();

app.set('view engine','hbs');
app.set('views',viewsPath);
 
app.use(express.static(publicDirectoryPath)); 

module.exports= app;

