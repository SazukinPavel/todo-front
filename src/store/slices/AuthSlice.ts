import { RegisterDto } from './../../types/dto/Register.dto';
import { User } from './../../types/User';
import { LoginDto } from './../../types/dto/Login.dto';
import { AuthSliceState } from './../../types/Auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthService } from '../../services/AuthService';
import { WritableDraft } from 'immer/dist/internal';

const initialState:AuthSliceState={isAuth:false,user:null}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetAuthError(state){
            state.errorMessage=undefined
        }
    },
    extraReducers:builder=>{
        builder.addCase(loginThunk.pending,logout)
        builder.addCase(loginThunk.fulfilled,login)
        builder.addCase(loginThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string
        })
        builder.addCase(registerThunk.pending,logout)
        builder.addCase(registerThunk.fulfilled,login)
        builder.addCase(registerThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string
        })
    }
})

const logout=(state:WritableDraft<AuthSliceState>)=>{
    state.isAuth=false
    state.errorMessage=undefined
    state.user=null
}

const login=(state:WritableDraft<AuthSliceState>,action:PayloadAction<User>)=>{
    state.isAuth=true
    state.user=action.payload
}

export const authReducer=authSlice.reducer
export const {resetAuthError}=authSlice.actions

export const loginThunk=createAsyncThunk<User,LoginDto>('loginThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.login(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})

export const registerThunk=createAsyncThunk<User,RegisterDto>('registerThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.register(dto)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})