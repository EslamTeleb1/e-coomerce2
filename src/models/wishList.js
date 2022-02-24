
const monoogse = require('mongoose');

const wishListSchema = new monoogse.Schema({

    id:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:Buffer
    }
    ,
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
    },
    owner:{
        type:monoogse.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    }

  },
  {
      timestamps:true
  })

const wishList =monoogse.model('wishList',wishList)

  module.exports=wishList