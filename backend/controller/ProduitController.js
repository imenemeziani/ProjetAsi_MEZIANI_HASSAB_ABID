const mongoose = require('mongoose')
const Produit= require('../model/Produit')

var multer = require('multer');



class ProduitController{
  static async SupprimerProduit(req,res) {
    const prod = await Produit.findById(req.params.idprod);
    if (prod) {
        prod.remove()
        .then(()=>res.json({ message: "Le produit est supprimé. "}))
        .catch((err)=>{res.send({ message:err});});
    }
    else{
        res.json({message:"Le produit n'existe pas"});
    }
}

    static async AfficherProduit(req, res) {
        
        const produit = await Produit.find({ _id : req.params._id });
        try {
          res.json(produit);
        } catch (error) {
          res.json(error);
        }
      }
      static async AfficherListeProduits(req, res) {
        
        const produit = await Produit.find();
        try {
          res.json(produit);
        } catch (error) {
          res.json(error);
        }
      }
    static async AjouterProduit(req,res) {
        const produit= new Produit({
            marque:req.body.marque,
            categorie:req.body.categorie,
            prix:req.body.prix
        })

        produit.save()
        .then(()=>res.send({message:"produit ajouté !!"}))
        .catch(()=>res.send({message:"error"}))
    }
}

module.exports=ProduitController