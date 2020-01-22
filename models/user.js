'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id_pk: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    gender: DataTypes.STRING
  }, {
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  });
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};