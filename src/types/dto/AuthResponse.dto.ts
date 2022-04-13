import { User } from './../User';

export interface AuthResponseDto{
    token:string
    user:User
}