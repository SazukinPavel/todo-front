import React, { FC, HTMLProps, useRef } from 'react';
import styles from './ModalWindow.module.scss'

interface ModalWindowProps{
    onClose:()=>void
}

const ModalWindow:FC<HTMLProps<HTMLDivElement> & ModalWindowProps>=({onClose,children,className,...props})=> {
    
    const backRef=useRef<HTMLDivElement>(null) 

    const onModalClose:React.MouseEventHandler=(e)=>{
        if(e.target===backRef.current){
            onClose()
        }
    }

    return ( 
        <div onClick={onModalClose} ref={backRef} className={styles.ModalWindow+" "+className ?? ""} {...props}>
            <div className={styles.ModalContent}>
                <span onClick={onClose} className={styles.Close}>x</span>
                <div>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default ModalWindow;