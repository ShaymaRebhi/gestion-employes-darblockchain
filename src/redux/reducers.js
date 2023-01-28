import employees from "./slices/employees";
import {combineReducers} from "@reduxjs/toolkit";

const reducers =combineReducers({employees});

export default reducers;
