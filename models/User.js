const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Model = Sequelize.Model;

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
);

User.associate = function (models) {
  User.hasMany(models.Restaurant);
};

module.exports = User;
