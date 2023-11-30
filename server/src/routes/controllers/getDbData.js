const {Driver, Team} = require('../../db.js');

const getDbData = async () => {
    const db = await Driver.findall({
        include: {
            model: Team,
            attributes: ['name'],
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

module.exports = getDbData