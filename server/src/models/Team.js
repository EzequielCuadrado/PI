const {DataTypes, Sequelize} = require('sequelize');


module.exports = (Sequelize) => {
    Sequelize.define('Team', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};