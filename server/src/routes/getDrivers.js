const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Router} = require('express');
const router = Router();
const imageController = require('./controllers/imageController')


router.get('/', async (req, res) => {
    try {
        const response = await axios.get(URL);
        const drivers = response.data;
        drivers.forEach(driver => imageController.assignDefaultImage(driver));

        res.json(drivers);
    }
    catch (error) {
        console.log('error trayendo pilotos');
    }
});

module.exports = router;