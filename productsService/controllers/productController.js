const { Product } = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const { plu, name } = req.body;
    const product = await Product.create({ plu, name });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};