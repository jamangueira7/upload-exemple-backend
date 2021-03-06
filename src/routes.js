const routes = require('express').Router();

routes.get("/", (req, res) => {
    return res.json({ hello: "Hello Workd"});
});


module.exports = routes;

