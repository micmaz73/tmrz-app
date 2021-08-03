import { combineReducers } from "redux";

import timersReducer from "./timersReducer";
import selectedTimerReducer from "./selectedTimerReducer";

const createRootReducer =  () => { return  combineReducers ({
    timers : timersReducer, //array
    selectedTimer : selectedTimerReducer, // int/number
});
};

export default createRootReducer;