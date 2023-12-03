const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const {assignDefaultImage} = require('./controllers/imageController');
const {Driver, Team} = require('../db')




const getDrivers = async (req, res) => {
    const {name} = req.query;
    const allDrivers = await axios.get(URL);
    try {
        if(name){
            const filteredDrivers = allDrivers.data.filter((driver) => driver.name.forename.toLowerCase().includes(name.toLowerCase()) || driver.name.surname.toLowerCase().includes(name.toLowerCase())).slice(0, 15);
    
                if (filteredDrivers.length > 0) {
                    filteredDrivers.forEach(driver => assignDefaultImage(driver));
                    res.status(200).json(filteredDrivers);
        }
                else {
                    res.status(404).json({message: "No hay corredores con el nombre proporcionado"});
        };
        }
        else{
            const drivers = allDrivers.data;
            drivers.forEach(driver => assignDefaultImage(driver));
    
            res.status(200).json(drivers);

        }
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};





const createDriver = async (req, res) => {
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
}

module.exports = {
    getDrivers,
    createDriver
};

