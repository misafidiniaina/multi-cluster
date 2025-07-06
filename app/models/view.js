const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('View', {
    counter: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};
