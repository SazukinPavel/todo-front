import { NavLink } from "react-router-dom";
import styles from './NoAuthSection.module.scss'

function NoAuthSection() {
    return ( 
        <div className={styles.NoAuthSection}>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
     );
}

export default NoAuthSection;