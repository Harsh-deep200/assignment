const express = require(`express`);
const mainRouter = require("./routes/index");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("this is main directory");
  res.status(200).send("this is main directory");
});

app.use("/product", mainRouter);

app.listen(3000, () => {
  console.log(`server is listening on port no.3000`);
});
