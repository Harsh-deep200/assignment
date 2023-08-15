const products = require("../Model/user");

const addController = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;

  let productId = Math.floor(Math.random() * 100);

  products.push({ productId, title, price });

  res.status(200).send(`add successful & product id is ${productId}`);
};

module.exports = addController;
