const router = require(`express`).Router();
const getProduct = require("../controller/getProduct");

router.get("/", (req, res) => {
  res.status(200).send(`this is get product api`);
});

router.get("/:id", getProduct);

module.exports = router;
