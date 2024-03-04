import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import MealContextProvider from "./providers/MealContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <MealContextProvider>
            <App/>
        </MealContextProvider>
    </ChakraProvider>
);
