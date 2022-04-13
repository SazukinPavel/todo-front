import { configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./slices/AuthSlice";


export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export type DispatchType=typeof store.dispatch

export type RootType=ReturnType<typeof store.getState>