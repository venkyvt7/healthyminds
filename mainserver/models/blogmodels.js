const mongoose=require('mongoose');

require('dotenv').config()

const BLOGS=new mongoose.Schema({
  
    name:{
        type:String,
        
    }
,
    head:{
        type:String
    }
,
   body:{
       type:String
   },
   likes:{
    type:Number,
    default:0
}
})

var blog= mongoose.model('mentalhacksblogs',BLOGS);
module.exports = blog;