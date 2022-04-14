import { NavLink } from "react-router-dom";
import styles from './UserSection.module.scss'

function UserSection() {
    return ( 
        <div className={styles.UserSection}>
            <NavLink to='todos'>Задачи</NavLink>
            <NavLink to='todos/add'>Добавить задачу</NavLink>
        </div>
     );
}

export default UserSection;