const { Stock, Product, Shop } = require('../models');

exports.createStock = async (req, res) => {
  try {
    const {product_id, shop_id, quantity_on_shelf, quantity_in_order  } = req.body;
    const stock = await Stock.create({ product_id, shop_id, quantity_on_shelf, quantity_in_order });
    res.status(201).json(stock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateStock = async (req, res) => {
    try {
      const { id } = req.params;
      const { action, amount } = req.body;
  
      const stock = await Stock.findByPk(id);
      if (!stock) return res.status(404).json({ error: 'Stock not found' });
  
      if (action === 'increase') {
        stock.quantity_on_shelf += amount;
      } else if (action === 'decrease') {
        stock.quantity_on_shelf -= amount;
      }
  
      await stock.save();
      res.json(stock);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.getStocks = async (req, res) => {
    try {
      const { plu, shop_id, shelf_min, shelf_max, order_min, order_max } = req.query;
      const where = {};
  
      if (shop_id) where.shop_id = shop_id;
      if (shelf_min) where.quantity_on_shelf = { [Op.gte]: shelf_min };
      if (shelf_max) where.quantity_on_shelf = { [Op.lte]: shelf_max };
      if (order_min) where.quantity_in_order = { [Op.gte]: order_min };
      if (order_max) where.quantity_in_order = { [Op.lte]: order_max };
  
      const stocks = await Stock.findAll({
        where,
        include: [{ model: Product, where: plu ? { plu } : undefined }],
      });
  
      res.json(stocks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  

  