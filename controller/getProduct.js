const users = require("../Model/user");

const getProduct = async (req, res) => {
  const productId = req.params.id;

  const user = users.find((item) => item.productId == productId);

  if (!user) {
    res.status(403).send(`valid id is required`);
    return;
  }

  res.status(200).json({ user });
};

module.exports = getProduct;
