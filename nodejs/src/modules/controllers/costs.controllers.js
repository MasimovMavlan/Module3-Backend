const Cost = require("../../db/models/costs/index");

module.exports.getAllCosts = (req, res) => {
  Cost.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewCost = (req, res) => {
  const cost = new Cost(req.body);
  cost.save().then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.changeCostInfo = (req, res) => {
  const { _id } = req.body;
  Cost.updateOne({ _id }, req.body).then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deletCost = (req, res) => {
  const { _id } = req.query;
  Cost.deleteOne({ _id }).then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.delteAllCost = (req, res) => {
  Cost.deleteMany(req.body).then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};
