'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id_pk: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_menu: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    user_fk: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id_pk'
      }
    }
  }, {
    tableName: 'order',
    timestamps: false,
    freezeTableName: true
  });
  order.associate = function (models) {
    order.belongsTo(models.user, { foreignKey: 'user_fk', as: 'userOrder' });
  };
  return order;
};