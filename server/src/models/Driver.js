const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripción: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
    },
    Nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    "Fecha de Nacimiento": {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {timeStamps: false}
  );
};