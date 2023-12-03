import axios from 'axios';
import {
    GET_DRIVERS,
    SEARCH_NAME,
} from './index-types';
import { json } from 'react-router-dom';

const getDrivers = () => {
    return async (dispatch) => {
        const json = await axios.get('localhost:3001/drivers');
        return dispatch({
            type: GET_DRIVERS,
            payload: json.data,
        })
    }
};

const searchByName = (name) => {
    return async (dispatch) => {
        try {
            const json = await axios.get(`localhost:3001/drivers?name=${name}`);
            return dispatch ({
                type: SEARCH_NAME,
                payload: json.data,
            })
        }
        catch (error) {
            return dispatch ({
                type: SEARCH_NAME,
                payload: json.data,
            })
        }
    }
}

module.exports = {
    getDrivers
}