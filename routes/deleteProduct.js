const router = require(`express`).Router();
const deleteProduct = require("../controller/deleteProduct");

router.get("/", (req, res) => {
  res.status(200).send("this is delete api");
});

router.delete("/:id", deleteProduct);

module.exports = router;
