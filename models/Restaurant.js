const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Model = Sequelize.Model;

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
      },
    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  },
  {
    sequelize,
    modelName: "restaurants",
    timestamps: false,
  }
);

Restaurant.associate = function (models) {
    Restaurant.belongsTo(models.User, { foreignKey: 'userId' })
}

Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Ticket)
}

module.exports = Restaurant;
