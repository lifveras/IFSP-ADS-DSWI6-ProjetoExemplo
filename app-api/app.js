const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ItemPatrimonioRoutes = require("./src/api/routes/ItemPatrimonioRoute") 
const app = express();

//Configuração dos middlewares
app.use(cors());
app.use(bodyParser.json());

// //Configuração das rotas da API
// app.get("/", (req, res) =>{
//     res.send("Express server");
//     res.end();
// });
app.use(ItemPatrimonioRoutes);

//Exporta o aplicativo express configurado
module.exports = app;