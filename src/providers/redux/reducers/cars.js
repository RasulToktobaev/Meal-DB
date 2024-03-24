import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid4} from "uuid"

const carsSlice = createSlice({

    name: "cars",
    initialState: {
        data: [
            {id: 1, brand: "Toyota"},
            {id: 2, brand: "Honda"},
            {id: 3, brand: "Ford"}
        ],
        status: "idle",
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.data = [...state.data, {id: uuid4(), brand: action.payload.brand}]
        },
        deleteCar : (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id)
        },
        deleteAll : (state, action) => {
            state.data = []
        }
    }
})

export const {addCar, deleteCar, deleteAll} = carsSlice.actions
export default carsSlice.reducer