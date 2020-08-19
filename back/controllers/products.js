const controller = {};
const Product = require("../models");

controller.getAll = (req, res) => {
  Product.findAll().then((products) => res.status(200).send(products));
};

controller.getOne = (req, res) => {
  Product.findByPk(req.params.id)
  .then(product => res.send(product))
}

controller.postOne = (req, res) => {
  Product.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err));
};

controller.editOne = (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
};

controller.deleteOne = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
};

module.exports = controller;
