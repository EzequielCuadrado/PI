import {
    GET_DRIVERS
} from '../actions/index-types';

const initialState = {
    drivers: [],
    backupDrivers: [],
    teams: [],
    detail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.types) {
        case GET_DRIVERS:
            return {
                ...state,
                drivers: action.payload,
                backupDrivers: action.payload,
            };
    }
}

export default rootReducer;