import { User } from "./User"

export interface Todo{
    title:string
    description:string
    id:string
    user:User | null
}