import { useEffect } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchTodosThunk } from "../../../store/slices/TodoSlice";
import TodoList from "./TodoList";
import styles from './Todos.module.scss'

function Todos() {

    const {all,page,todos,isError,isLoading}=useTypedSelector(state=>state.todo)
    const dispatch=useTypedDispatch()

    useEffect(()=>{
        dispatch(fetchTodosThunk({page,limit:20}))
    },[page])

    return ( 
        <div className={styles.Todos}>
            <h1>Todos</h1>
            {
                isLoading?
                <h1>Loading</h1>
                :isError?
                    <h1>Error</h1>
                    :<TodoList todos={todos}/>
            }
        </div>
     );
}

export default Todos;