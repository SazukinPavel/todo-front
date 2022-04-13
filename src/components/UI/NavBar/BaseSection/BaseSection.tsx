import { NavLink } from "react-router-dom";
import styles from './BaseSection.module.scss'

function BaseSection() {
    return ( 
        <div className={styles.BaseSection}>
            <span>todos</span>
        </div>
     );
}

export default BaseSection;