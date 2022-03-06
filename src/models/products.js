const monoogse = require('mongoose');

const productsSchema = new monoogse.Schema({

    ID:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:Buffer
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    
    cost:{
        type:Number,
        trim:true,
        required:true,
        default:false,
    },
    stars : 
    {
        type:Number,
        trim:true,
        required:true,
        default:false,
    }

  },
  {
      timestamps:true
  })

const products = monoogse.model('products',productsSchema)

  module.exports=products;