import { useTypedDispatch } from "../../../../../hooks/useTypedDispatch";
import { completeTodoThunk, deleteTodoThunk } from "../../../../../store/slices/TodoSlice";
import { Todo } from "../../../../../types/Todo";
import Button from "../../../../UI/Button";
import styles from './TodoCard.module.scss'

function TodoCard({title,completed,description,id}:Todo) {

    const dispath=useTypedDispatch()

    const deleteTodo=()=>{
        dispath(deleteTodoThunk(id))
    }

    const completeTodo=()=>{
        dispath(completeTodoThunk({title,id,completed,description}))
    }

    return ( 
        <div className={styles.TodoCard}>
            <div className={styles.Text}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className={styles.Buttons}>
                <Button onClick={completeTodo} styleType='primary'>{completed?'Сделано':'Не сделано'}</Button>
                <Button onClick={deleteTodo} styleType='warn'>Удалить</Button>
            </div>
        </div>
     );
}

export default TodoCard;