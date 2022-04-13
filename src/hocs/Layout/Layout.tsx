import { Outlet } from "react-router-dom";
import NavBar from "../../components/UI/NavBar";

function Layout() {
    return ( 
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}

export default Layout;