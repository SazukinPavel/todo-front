import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from "./hocs/Layout";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
   );
}

export default App;