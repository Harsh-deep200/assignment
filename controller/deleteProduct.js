var users = require("../Model/user");

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  users = users.filter((item) => (item.productId = !productId));
  res.status(200).send("its delete");
};

module.exports = deleteProduct;
