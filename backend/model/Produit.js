const mongoose= require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
require('dotenv/config');
const Schema= mongoose.Schema
const ProduitSchema = new Schema({
    marque:{
        required:false,
        type:String
    },
    categorie:{
        required:true,
        type:String
    },
    prix:{
        required: true,
        type:Number
    },
    etat:{
        required:false,
        type:Boolean
    },
    image:
    {
        required:false,
        data:Buffer, 
        contentType: String 
    }

})
module.exports=mongoose.model('Produit',ProduitSchema)