module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
      shelf_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      order_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    });
  
    Stock.associate = function (models) {
      Stock.belongsTo(models.Product, { foreignKey: 'product_id' });
      Stock.belongsTo(models.Shop, { foreignKey: 'shop_id' });
    };
  
    return Stock;
  };