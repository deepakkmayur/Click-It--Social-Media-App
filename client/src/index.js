import React from "react"; 
import ReactDOM from "react-dom";

import App from "./App";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from "react-redux";   
import store from "./store/ReduxStore";             

ReactDOM.render(
    <Provider store={store}>    
  <BrowserRouter>
  <Routes>
    <Route path="*" element={ <App/>}/>
  </Routes>
  </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);

