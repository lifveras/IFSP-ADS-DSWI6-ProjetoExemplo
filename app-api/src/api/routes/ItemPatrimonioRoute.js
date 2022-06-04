// const routes = require("express").Router();
const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");
const ItemPatrimonioController = require("../controllers/ItemPatrimonioController")

const routes = Router();

routes.get("/patrimonio", verifyJWT, ItemPatrimonioController.listAll);
routes.get("/patrimonio/:patrimonio_id", verifyJWT, ItemPatrimonioController.get);
routes.post("/patrimonio", verifyJWT, ItemPatrimonioController.add);
routes.delete("/patrimonio/:patrimonio_id", verifyJWT, ItemPatrimonioController.remove);

module.exports = routes;
