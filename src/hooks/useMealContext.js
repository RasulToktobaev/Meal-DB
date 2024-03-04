import {useContext} from "react";
import {MealContext} from "../providers/MealContextProvider";

const useMealContext = () => useContext(MealContext)

export default useMealContext