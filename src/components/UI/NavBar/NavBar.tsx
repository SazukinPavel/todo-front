import { useTypedSelector } from '../../../hooks/useTypedSelector';
import BaseSection from './BaseSection';
import './NavBar.scss'
import NoAuthSection from './NoAuthSection/NoAuthSection';
import UserSection from './UserSection';

function NavBar() {

    const {isAuth}=useTypedSelector(state=>state.auth)

    return ( 
        <nav className='NavBar'>
            <BaseSection/>
            {!isAuth?
                <NoAuthSection/>
                :<UserSection/>
            }
        </nav>
     );
}

export default NavBar;