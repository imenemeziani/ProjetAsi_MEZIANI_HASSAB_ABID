const express = require('express');
const router = express.Router();
const controller= require("../controller/ProduitController")

router.post("/ajouter",controller.AjouterProduit)
router.get("/afficherProduit/:_id",controller.AfficherProduit)
router.get("/afficherListeProduits",controller.AfficherListeProduits)
router.delete("/supprimer/:idprod",controller.SupprimerProduit)
module.exports = router;
