const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    code :{
        type: String,
        required: true,
    },
    
    couleur :{
        type: String,
        required: true,
    },
 XS :{
        type: Number,
        default: 0 } ,
S :{
            type: Number,
            default: 0     },
 M :{
                type: Number,
                default: 0       } ,        
 L :{
         type: Number,
         default: 0             },
XL :{
         type: Number,
         default: 0           },
XXL :{
   type: Number,
   default: 0            },            
        
    quantite :{
        type: String,
        required: true,
    },
    like:{
        type: Number,
        default: 0
    },
    prix :{
        type: String,
        required: true,
    },
})
module.exports = mongoose.model("Article" , articleSchema);