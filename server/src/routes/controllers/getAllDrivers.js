
const {getApiData} = require('./getApiData');
const {getDbData} = require('./getDbData');

const getAllDrivers = async () => {
    const apiData = await getApiData();
    const dbData = await getDbData();

    return [apiData, ...dbData].flat();
}

module.exports = {getAllDrivers};