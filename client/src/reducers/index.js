import { combineReducers } from "redux";

import authReducer from './authReducer'
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

export const reducers=combineReducers({authReducer,postReducer,commentReducer})