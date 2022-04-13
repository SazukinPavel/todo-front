import { User } from './User';

export interface AuthSliceState{
    isAuth:boolean
    user:User | null
    errorMessage?:string
}