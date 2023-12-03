const {Driver, Team} = require('../../db.js');

const getDbData = async () => {
    const db = await Driver.findAll({
        include: {
            model: Driver,
            attributes: ['Nombre'],
            through: {
                attributes: [],
            }
        }
    });
    const drivers = db.map((driver) => {
        const Teams = driver.Teams.map((driver) => driver.name);
        return {...driver.toJson(), Teams};
    });
    return drivers;
};

module.exports = {getDbData}