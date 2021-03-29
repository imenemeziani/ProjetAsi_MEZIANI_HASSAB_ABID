const mongoose = require('mongoose')
const commande = require('../model/Commande')

class CommandeController{
    static async AjouterCommande(req,res) {
        const cmd= new commande({
            listes:req.body.listes,
            nom:req.body.nom,
            prenom:req.body.prenom,
            
        })

        cmd.save()
        .then(()=>res.send({message:"Commande envoyée !"}))
        .catch(()=>res.send({message:"error"}))
    }
}

module.exports=CommandeController