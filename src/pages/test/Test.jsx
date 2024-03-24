import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCar, deleteAll, deleteCar} from "../../providers/redux/reducers/cars";

const AddCar = () => {

    const [newCar, setNewCar] = useState('')

    const dispatch = useDispatch()

    const addCarHandler = () => {
        if(!newCar.length){
            return
        }

        dispatch(addCar({brand: newCar}))

        setNewCar("")

    }



    return (
        <div>
            <input value={newCar} onChange={(e) => setNewCar(e.target.value)} type="text"/>
            <button onClick={addCarHandler}>Add</button>
            <button style={{marginLeft:'30px'}} onClick={() => dispatch(deleteAll())}>Delete All</button>
        </div>
    )
}

const Test = () => {

    const {data, status, error} = useSelector((state) => state.carsSlice)

    const dispatch = useDispatch()


    return (
        <>

            <AddCar/>

            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.brand}
                        <button onClick={() => dispatch(deleteCar({id: item.id}))}>x</button></li>
                ))}
            </ul>
        </>
    );
};

export default Test;