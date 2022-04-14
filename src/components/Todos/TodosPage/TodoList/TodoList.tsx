import { Todo } from "../../../../types/Todo";
import TodoCard from "./TodoCard";

interface TodoListProps{
    todos:Todo[]
}

function TodoList({todos}:TodoListProps) {
    
    return ( 
        <div>
            {todos.map((t)=><TodoCard {...t} key={t.id}/>)}
        </div>
     );
}

export default TodoList;