const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Router} = require('express');
const router = Router();
const {assignDefaultImage} = require('./controllers/imageController');
const {getSource} = require('./controllers/sourceController');
const {Driver, Team} = require('../db')




router.get('/', async (req, res) => {
    try {
        const response = await axios.get(URL);
        const drivers = response.data;
        drivers.forEach(driver => assignDefaultImage(driver));

        res.status(200).json(drivers);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
});



router.get('/:idDriver', async (req, res) => {
    const { idDriver } = req.params;
    try {
        const source = isNaN(idDriver) ? "db" : "api";
        const driver = await getSource(idDriver, source);
       
        res.status(200).json(driver);
    }
    catch (error) {
        res.status(400).json({error: error.message});
        console.log("falla la funcion get by id");
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            Nombre,
            Apellido,
            Nacionalidad,
            Imagen,
            FdN,
            Descripción,
            Teams,
        } = req.body;
        if (!Nombre || !Apellido|| !Nacionalidad || !FdN || !Descripción || !Teams ) {
            res.status(400).json({error: "Faltan llenar campos obligatorios"})
        }

        let teamsDb = await Team.findAll({where: {Nombre: Teams}});
        const driverCreated = await Driver.create({
            Nombre,
            Apellido,
            Nacionalidad,
            Imagen,
            FdN,
            Descripción,
        });
        driverCreated.addTeams(teamsDb);

        res.status(200).json(driverCreated);
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;

