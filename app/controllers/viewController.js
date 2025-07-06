const { View } = require("../models");

exports.homePage = async (req, res) => {
  let row = await View.findByPk(1);
  if (!row) row = await View.create({ counter: 19 });
  else {
    row.counter += 1;
    await row.save();
  }
  res.render("index", { count: row.counter });
};

exports.healthCheck = (req, res) => res.send("OK");
