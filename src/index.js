import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import MealContextProvider from "./providers/MealContextProvider";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./providers/redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
       <BrowserRouter>
           <MealContextProvider>
               <Provider store={store}>
                   <App/>
               </Provider>
           </MealContextProvider>
       </BrowserRouter>
    </ChakraProvider>
);
