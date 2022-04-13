import styles from './FormErrorMessage.module.scss'

interface FormErrorMessage{
    message?:string
}

function FormErrorMessage({message}:FormErrorMessage) {

    return ( 
        <div className={styles.FormErrorMessage}>
           {message && <span>{message}</span>}
        </div>
     );
}

export default FormErrorMessage;