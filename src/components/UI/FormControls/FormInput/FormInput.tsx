import {HTMLProps } from "react";
import styles from './FormInput.module.scss'

interface FormInputProps{
    register:any
}

const FormInput=({register,...inputProps}:HTMLProps<HTMLInputElement> & FormInputProps)=> {
    return ( 
        <input autoComplete='off' className={styles.FormInput} {...register} {...inputProps}/>
     );
}

export default FormInput;