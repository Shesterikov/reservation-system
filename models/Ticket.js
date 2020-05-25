const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Model = Sequelize.Model;

class Ticket extends Model {}

Ticket.init(
  {
    id: {
      primaryKey: true,
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
    },
    restaurantId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    purchases: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tickets",
    timestamps: false,
  }
);

Ticket.associate = function (models) {
  Ticket.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
};

module.exports = Ticket;
