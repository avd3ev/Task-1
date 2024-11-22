import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  return sequelize.define('Action', {
    plu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
};