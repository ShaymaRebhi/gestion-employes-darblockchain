import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";

//this is where we create the Redux store instance with reducers
export default configureStore({
    reducer: reducers,
    devTools: true,
})
