import { AddTodoDto } from './../types/dto/AddTodo.dto';
import { UpdateTodoDto } from './../types/dto/UpdateTodo.dto';
import { PaginationOptionsDto } from './../types/dto/PaginationOptions.dto';
import { $axios } from '../http';
import { Todo } from '../types/Todo';

export class TodoService{

    static fetchTodos(dto:PaginationOptionsDto){
        return $axios.get<Todo[]>('todos',{params:{pagination:dto}})
    }

    static getTodoCount(){
        return $axios.get<number>('todos',{params:{count:true}})
    }

    static updateTodo(dto:UpdateTodoDto){
        return $axios.put<Todo>('todos',dto)
    }

    static deleteTodo(id:string){
        return $axios.delete<any>('todos/'+id)
    }

    static addTodo(dto:AddTodoDto){
        return $axios.post<Todo>('todos',dto)
    }
}