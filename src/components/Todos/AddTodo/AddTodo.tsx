import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useGoBack } from "../../../hooks/useGoBack";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { addTodoThunk } from "../../../store/slices/TodoSlice";
import { AddTodoDto } from "../../../types/dto/AddTodo.dto";
import Button from "../../UI/Button";
import FormErrorMessage from "../../UI/FormControls/FormErrorMessage";
import FormInput from "../../UI/FormControls/FormInput";
import FormTextArea from "../../UI/FormControls/FormTextArea";
import ModalWindow from "../../UI/ModalWindow";
import styles from './AddTodo.module.scss'

function AddTodo() {

    const dispatch=useTypedDispatch()
    const {register,reset,formState:{errors},handleSubmit}=useForm<AddTodoDto>({mode:'onTouched'})
    const goBack=useGoBack()
    const [wasAdded,togleWasAdded]=useReducer((state)=>!state,false)

    const onAdd=(dto:AddTodoDto)=>{
        dispatch(addTodoThunk(dto)).then(()=>{
            togleWasAdded()
        })
        reset()
    }

    return ( 
        <div className={styles.AddTodo}>
            <h1>Добавление задачи</h1>
            <form onSubmit={handleSubmit(onAdd)} className={styles.Form}>
                <FormInput placeholder="Заголовок" type='text' register={register('title',{required:'Заголовок обязателен'})}/>
                <FormErrorMessage message={errors.title?.message}/>
                <FormTextArea placeholder="Дополнительный текст" register={register('description')}/>
                <div className={styles.Buttons}>
                    <Button onClick={goBack} styleType='primary'>Назад</Button>
                    <Button onClick={()=>reset()} styleType='warn'>Сбросить</Button>
                    <Button type='submit' styleType='sucess'>Добавить</Button>
                </div>
            </form>  
            {wasAdded&&<ModalWindow onClose={togleWasAdded}>
                <h1>Задача была добавлена</h1>
            </ModalWindow>}
        </div>
     );
}

export default AddTodo;