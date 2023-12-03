const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const getApiData = async() => {
    try {
        const api = await axios.get(URL);
        const data = api.data.map((driver) => {
            return {
                Id: driver.id,
                Name: driver.name.forename,
                Lastname: driver.name.surname,
                Nationality: driver.nationality,
                Image: driver.image,
                Description: driver.description,
                Dob: driver.dob,
                Teams: driver.teams,
            }         
        })
        return data;
    }
    catch (error) {
        throw Error(error.message);
    }
};

module.exports = {getApiData};