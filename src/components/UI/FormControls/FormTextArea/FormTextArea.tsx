import { HTMLProps } from "react";
import styles from './FormTextArea.module.scss'

interface FormTextAreaProps{
    register:any
}

function FormTextArea({register,...inputProps}:HTMLProps<HTMLInputElement> & FormTextAreaProps) {
    return ( 
        <textarea className={styles.FormTextArea} {...register} {...inputProps}>

        </textarea>
     );
}

export default FormTextArea;