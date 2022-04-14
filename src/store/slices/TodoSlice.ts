import { AddTodoDto } from './../../types/dto/AddTodo.dto';
import { PayloadAction } from '@reduxjs/toolkit';
import { TodoService } from './../../services/TodoService';
import { PaginationOptionsDto } from './../../types/dto/PaginationOptions.dto';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { Todo, TodoSliceState } from './../../types/Todo';
import { createSlice } from '@reduxjs/toolkit';

const initialState:TodoSliceState={page:0,isError:false,isLoading:false,todos:[],all:0}

export const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        setTodoPage(state,action:PayloadAction<number>){
            state.page=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchTodosThunk.pending,setLoading)
        builder.addCase(fetchTodosThunk.fulfilled,(state,action)=>{
            state.isLoading=false
            state.todos=action.payload
        })
        builder.addCase(fetchTodosThunk.rejected,setError)
        builder.addCase(getTodoCountThunk.fulfilled,(state,action)=>{
            state.all=action.payload
        })
        builder.addCase(completeTodoThunk.fulfilled,(state,action)=>{
            state.todos=state.todos.map((t)=>{
                if(t.id===action.payload.id){
                    return action.payload
                }
                return t
            })
        })
        builder.addCase(deleteTodoThunk.fulfilled,(state,action)=>{
            state.todos=state.todos.filter((t)=>t.id!==action.payload)
            state.all-=1
        })
        builder.addCase(addTodoThunk.fulfilled,(state,action)=>{
            state.todos=[...state.todos,action.payload]
        })
    }
})

const setLoading=(state:WritableDraft<TodoSliceState>)=>{
    state.isLoading=true
    state.isError=false
}

const setError=(state:WritableDraft<TodoSliceState>)=>{
    state.isError=true
    state.isLoading=false
}

export const todoReducer=todoSlice.reducer

export const fetchTodosThunk=createAsyncThunk<Todo[],PaginationOptionsDto>('fetchTodosThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await TodoService.fetchTodos(dto)
        return res.data
    }catch(e){
        return rejectWithValue(e)
    }
})

export const getTodoCountThunk=createAsyncThunk<number,null>('getTodoCountThunk',
async(_,{rejectWithValue})=>{
    try{
        const res=await TodoService.getTodoCount()
        return res.data
    }catch(e){
        return rejectWithValue('')
    }
})

export const completeTodoThunk=createAsyncThunk<Todo,Todo>('completeTodoThunk',
async(todo,{rejectWithValue})=>{
    try{
        const res=await TodoService.updateTodo({...todo,completed:!todo.completed})
        return {...todo,completed:!todo.completed}
    }catch(e){
        return rejectWithValue('error')
    }
})

export const deleteTodoThunk=createAsyncThunk<any,string>('deleteTodoThunk',
async(id,{rejectWithValue})=>{
    try{
        const res=await TodoService.deleteTodo(id)
        return id
    }catch(e){
        return rejectWithValue('error')
    }
})

export const addTodoThunk=createAsyncThunk<Todo,AddTodoDto>('addTodoThunk',
async(dto,{rejectWithValue})=>{
    try{
        const res=await TodoService.addTodo(dto)
        return res.data
    }catch{
        return rejectWithValue('error')
    }
})