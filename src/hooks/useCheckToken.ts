import { checkTokenThunk } from './../store/slices/AuthSlice';
import { useEffect } from 'react';
import { useTypedDispatch } from './useTypedDispatch';

export const useCheckToken=(addict:any[])=>{
    const dispatch=useTypedDispatch()
    
    useEffect(()=>{
        dispatch(checkTokenThunk(null))
    },addict)
}