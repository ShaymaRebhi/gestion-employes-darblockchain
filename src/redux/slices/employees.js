
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeesDataService from "../../services/employees.services";
const initialState = [];

//define reducers that will updates a different part of the application state corresponding to dispatched action.
export const createEmployee = createAsyncThunk(
    "employees/create",
    async ({ firstName, lastName , age , email ,occupation }) => {
        const res = await EmployeesDataService.create({  firstName, lastName , age , email ,occupation });
        return res.data;
    }
);

export const retrieveEmployees = createAsyncThunk(
    "employees/retrieve",
    async () => {
        const res = await EmployeesDataService.getAll();
        return res.data;
    }
);


export const findEmployeesById = createAsyncThunk(
    "employees",
    async ({ id }) => {
        const res = await EmployeesDataService.get(id);
        return res.data;
    }
);

const employees = createSlice({
    name: "employee",
    initialState,
    extraReducers: {
        [createEmployee.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [retrieveEmployees.fulfilled]: (state, action) => {
            return [...action.payload];
        },

        [findEmployeesById.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

export default employees.reducer;
