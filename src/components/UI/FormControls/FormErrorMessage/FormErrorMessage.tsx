import styles from './FormErrorMessage.module.scss'

export interface FormErrorMessageProps{
    message?:string
}

function FormErrorMessage({message}:FormErrorMessageProps) {

    return ( 
        <div className={styles.FormErrorMessage}>
           {message && <span>{message}</span>}
        </div>
     );
}

export default FormErrorMessage;