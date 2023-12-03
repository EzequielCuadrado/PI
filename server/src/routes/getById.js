const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Router} = require('express');
const router = Router();
const {assignDefaultImage} = require('./controllers/imageController');
const {getSource} = require('./controllers/sourceController');
const {Driver, Team} = require('../db')




const getById = async (req, res) => {
    const { idDriver } = req.params;
    try {
        const source = isNaN(idDriver) ? "db" : "api";
        const driver = await getSource(idDriver, source);
        assignDefaultImage(driver);
       
        res.status(200).json(driver);
    }
    catch (error) {
        res.status(400).json({error: error.message});
        console.log("falla la funcion get by id");
    }
};

module.exports = getById;