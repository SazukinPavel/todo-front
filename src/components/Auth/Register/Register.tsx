import { useForm } from "react-hook-form";
import { useGoBack } from "../../../hooks/useGoBack";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { registerThunk, resetAuthError } from "../../../store/slices/AuthSlice";
import { RegisterDto } from "../../../types/dto/Register.dto";
import Button from "../../UI/Button";
import ModalWindow from "../../UI/ModalWindow";
import FormErrorMessage from "../FormControls/FormErrorMessage";
import FormInput from "../FormControls/FormInput";
import styles from './Register.module.scss'

function Register() {

    const authError=useTypedSelector(state=>state.auth.errorMessage)
    const dispatch=useTypedDispatch()
    const {register,formState:{errors,isValid},reset,handleSubmit}=useForm<RegisterDto>({mode:'onTouched'})

    const goBack=useGoBack()

    const onRegister=(dto:RegisterDto)=>{
        dispatch(registerThunk(dto))
        reset()
    }
    
    const resetError=()=>{
        dispatch(resetAuthError())
    }

    return ( 
        <div className={styles.Register}>
            <h1>Регистрация</h1>
            <form className={styles.Form} onSubmit={handleSubmit(onRegister)}>
                <FormInput register={register('username',{
                    required:'Имя обязательный параметр'})}  placeholder="Имя пользователя"/>
                <FormErrorMessage message={errors.username?.message}/>
                <FormInput register={register('email',{
                    required:'Email обязательный параметр',
                    pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                    ,message:'Email не валидный'}})}  placeholder="Email"/>
                <FormErrorMessage message={errors.email?.message}/>
                <FormInput register={register('password',{
                    required:'Пароль обязательный параметр',
                    minLength:{value:8,message:'Пароль должен быть больше 8 символов'}})}
                    placeholder="Пароль"/>
                <FormErrorMessage message={errors.password?.message}/>
                <FormInput register={register('bio')} placeholder="О себе"/>
                <div className={styles.Buttons}>
                    <Button styleType='primary' onClick={goBack}>Назад</Button>
                    <Button styleType='warn' onClick={()=>reset}>Очистить</Button>
                    <Button type='submit' styleType='sucess' disabled={!isValid}>Зарегистрироваться</Button>
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

export default Register;