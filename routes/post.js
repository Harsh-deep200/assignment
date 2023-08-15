const router = require("express").Router();
const addController = require("../controller/addProduct");

router.post("/", addController);

module.exports = router;
