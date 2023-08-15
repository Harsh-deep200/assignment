const router = require(`express`).Router();
const addProduct = require("./post");
const getProduct = require("./getProduct");
const putProduct = require("./putProduct");
const deleteProduct = require("./deleteProduct");

router.get("/", (req, res) => {
  console.log(`this is router directory`);
  res.status(200).send("this is router directory");
});

router.use("/add", addProduct);
router.use("/getProduct", getProduct);
router.use("/putProduct", putProduct);
router.use("/deleteProduct", deleteProduct);

module.exports = router;
