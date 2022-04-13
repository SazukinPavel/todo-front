import { useForm } from "react-hook-form";
import { useGoBack } from "../../../hooks/useGoBack";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { loginThunk, resetAuthError } from "../../../store/slices/AuthSlice";
import { LoginDto } from "../../../types/dto/Login.dto";
import Button from "../../UI/Button";
import ModalWindow from "../../UI/ModalWindow";
import FormErrorMessage from "../FormControls/FormErrorMessage";
import FormInput from "../FormControls/FormInput";
import styles from './Login.module.scss'

function Login() {

    const authError=useTypedSelector(state=>state.auth.errorMessage)
    const dispatch=useTypedDispatch()
    const {register,handleSubmit,reset,formState:{errors,isValid}}=useForm<LoginDto>({mode:'onTouched'})

    const goBack=useGoBack()
    
    const onLogin=(dto:LoginDto)=>{
        dispatch(loginThunk(dto))
        reset()
    }

    const resetError=()=>{
        dispatch(resetAuthError())
    }

    return ( 
        <div className={styles.Login}>
            <h1>Вход</h1>
            <form className={styles.Form} onSubmit={handleSubmit(onLogin)}>
                <FormInput placeholder="Имя или Email" register={register('usernameOrEmail',{
                    required:'Имя или Email обязательный параметр'
                })}/>
                <FormErrorMessage message={errors.usernameOrEmail?.message}/>
                <FormInput placeholder="Пароль" register={register('password',{
                    required:'Пароль обязательный параметр'
                })}/>
                <FormErrorMessage message={errors.password?.message}/>
                <div className={styles.Buttons}>
                    <Button type='submit' styleType='primary' onClick={goBack}>Назад</Button>
                    <Button styleType='warn' onClick={()=>reset()}>Очистить</Button>
                    <Button styleType='sucess' disabled={!isValid}>Войти</Button>
                </div>
            </form>
            {authError && 
            <ModalWindow onClose={resetError}>    
                <h3>Произошла ошибка!</h3>
                <p>{authError}</p>
            </ModalWindow>}
        </div>
     );
}

export default Login;