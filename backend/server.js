
const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors')
const produit= require('./routes/ProduitRoutes')
const commande = require('./routes/CommandeRoutes')
var fs = require('fs');
var multer = require('multer');

const app = express();
app.use(bodyParser.json());


/*app.post('./images',function(req,res){
  var newItem = new Item();
  newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
  newItem.img.contentType = 'image/banane.jpg';
  newItem.save();
});
*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//db config
const db = require('./config/key').mongoURI;

//connect to mongo

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true  })
 .then(()=> console.log('MongoDB connected...'))
 .catch(err => console.log(err));

 //use routes
app.use("/produit",produit) 
app.use("/commande",commande) 


 const port = process.env.PORT || 5000;

 app.listen(port, () => console.log('server started on port ${port}'));