const S = require("sequelize");
const db = require('../config/db')

class Product extends S.Model {}

Product.init({
    name: {
        type: S.STRING,
        required: true
    },
    price: {
        type: S.INTEGER,
        required: true
    },
    image: {
        type: S.STRING,
        required: true
    }
}, { sequelize: db, modelName: 'Product' });

module.exports = Product;
