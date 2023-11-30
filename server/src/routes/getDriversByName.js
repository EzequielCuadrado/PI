const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Router} = require('express');
const router = Router();
const { assignDefaultImage } = require('./controllers/imageController');
const { getAllDrivers } = require('./controllers/getAllDrivers');


router.get('/', async (req, res) => {
    const {name} = req.query;
    try{
        const AllDrivers = await getAllDrivers();
        const filteredDrivers = AllDrivers.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase())).slice(0, 15);

        if (filteredDrivers.length > 0) {
            filteredDrivers.forEach(driver => assignDefaultImage(driver));
            res.status(200).json(filteredDrivers);
        }
        else {
            res.status(404).json({message: "No hay corredores con el nombre proporcionado"});
        };
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;