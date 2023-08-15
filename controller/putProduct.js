const users = require("../Model/user");

const putProduct = async (req, res) => {
  const productId = req.params.id;
  const title = req.body.title;
  const price = req.body.price;

  const user = users.find((item) => item.productId == productId);

  if (!user) {
    res.status(403).send("valid id is required");
    return;
  }
  user.title = title;
  user.price = price;
  // users.push({ productId, title, price });
  res.status(200).json({ user });
};

module.exports = putProduct;
