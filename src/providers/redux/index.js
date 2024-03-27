import {configureStore} from "@reduxjs/toolkit";
import carsSlice from "./reducers/cars";
import {rememberReducer, rememberEnhancer} from 'redux-remember';

const reducers = {
    carsSlice: carsSlice
};

const rememberedKeys = ['carsSlice'];


const store = configureStore({
    reducer: rememberReducer(reducers),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})

export default store