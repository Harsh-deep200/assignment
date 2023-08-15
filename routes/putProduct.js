const router = require(`express`).Router();
const putProduct = require("../controller/putProduct");

router.get("/", (req, res) => {
  res.status(200).send("this is putProduct api");
});

router.put("/:id", putProduct);
module.exports = router;
