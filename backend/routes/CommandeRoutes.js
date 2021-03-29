const express = require('express');
const router = express.Router();
const controller= require("../controller/CommandeController")

router.post("/commander",controller. AjouterCommande)
module.exports = router;
