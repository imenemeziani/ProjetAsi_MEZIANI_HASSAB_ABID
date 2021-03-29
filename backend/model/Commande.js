const mongoose= require('mongoose')
const Schema= mongoose.Schema
const CommandeSchema = new Schema({
    listes: [

        { produit: {
            id_produit : {
                required: true,
                type:String
                         },
            quantite:{
                required: true,
                type:Number
                     }
                  }}
            ],
    nom: {
        required: true,
        type: String
    },
    prenom: {
        required: true,
        type: String
    }
  
        
   
})
module.exports=mongoose.model('Commande',CommandeSchema)