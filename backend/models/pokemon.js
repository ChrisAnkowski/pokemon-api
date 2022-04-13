"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Pokemon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Pokemon.init(
        {
            number: DataTypes.STRING,
            name: DataTypes.STRING,
            type: DataTypes.STRING,
            category: DataTypes.STRING,
            description: DataTypes.STRING,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            sequelize,
            modelName: "Pokemon",
        }
    );
    return Pokemon;
};
