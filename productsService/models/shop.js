module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Shop;
  };