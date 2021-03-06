const { Schema, model } = require("mongoose");
const Product = require('./product')

const CartSchema = new Schema(
  {
    products: [Product],
  },
  { timestamps: true }
);


module.exports = CartSchema