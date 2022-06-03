// const routes = require("express").Router();
const {Router} = require("express");

const AuthenticationController = require("../controllers/AuthenticationController")

const routes = Router();

routes.post("/login", AuthenticationController.doLogin);
routes.get("/logout", AuthenticationController.doLogin);

module.exports = routes;
