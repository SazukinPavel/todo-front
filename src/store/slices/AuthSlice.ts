import { AuthSliceState } from './../../types/Auth';
import { createSlice } from "@reduxjs/toolkit";

const initialState:AuthSliceState={isAuth:false,user:null}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
    },
    extraReducers:builder=>{

    }
})

export const authReducer=authSlice.reducer