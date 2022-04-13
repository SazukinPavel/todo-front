import { ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.scss'

interface ButtonProps{
    styleType:'primary' | 'warn' | 'sucess'
}

const Button:FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>=({styleType,children,...props})=> {
    
    const className=styles.Button+" "+styles[styleType]

    return ( 
        <button className={className} {...props}>
            {children}
        </button>
     );
}

export default Button;