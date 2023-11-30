
const {Router} = require('express');
const router = Router();
const { Driver, Team} = require('../db');
const axios = require('axios');


router.get('/', async (req, res) => {
    try {
        const teamsDb = await Team.findAll();

        if(teamsDb.length === 0) {
            const response = await axios.get('http://localhost:5000/drivers');
            const teamsApi = response.data.map(driver => driver.teams);
            const teamsToSave = [];
            const allTeams = teamsApi.join().replace(' ','').split(',');
            const teamFilter = allTeams.filter((team, index) => {
                return allTeams.indexOf(team.trim()) === index;
            })
            teamFilter.forEach(team => {
                teamsToSave.push({
                    Nombre: team,
                })
            })
            await Team.bulkCreate(teamsToSave);
            res.status(200).json({message: "equipos guardados"}) 
        }
        else {
            res.status(200).json({equipos: teamsDb});
        }

    } 
    catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;