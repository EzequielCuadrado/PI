const { Driver, Team } = require('../../db');
const {sequelize} = require('sequelize');
const URL = 'http://localhost:5000/drivers';
const axios = require('axios');

const getSource = async (idDriver, source) => {
    const driver = source === 'api' ? (await axios.get(`${URL}/${idDriver}`)).data : await Driver.findByPk(idDriver);
    return driver;
    };





module.exports = {
    getSource
}