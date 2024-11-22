module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      plu: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Product;
  };