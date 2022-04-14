import { User } from "./User"

export interface Todo{
    title:string
    description:string
    id:string
    user?:User | null
    completed:boolean
    createdAt?:Date
}

export interface TodoSliceState{
    todos:Todo[]
    isLoading:boolean
    isError:boolean
    page:number
    all:number
}