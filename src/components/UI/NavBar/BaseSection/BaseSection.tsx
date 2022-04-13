import { NavLink } from "react-router-dom";
import styles from './BaseSection.module.scss'

function BaseSection() {
    return ( 
        <div className={styles.BaseSection}>
            <NavLink to='#'>todos</NavLink>
        </div>
     );
}

export default BaseSection;