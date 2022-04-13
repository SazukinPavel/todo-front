import { Todo } from './Todo';
import { RoleType } from './Role';

export interface User{
    id:string
    email:string
    username:string
    role:RoleType
    bio:string
    todos:Todo[]
}

