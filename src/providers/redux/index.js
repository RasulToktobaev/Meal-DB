import {configureStore} from "@reduxjs/toolkit";
import carsSlice from "./reducers/cars";

const store = configureStore({
    reducer : {
        carsSlice : carsSlice
    }
})

export default store