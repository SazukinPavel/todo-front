import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AddTodo from "./components/Todos/AddTodo";
import Todos from "./components/Todos/TodosPage";
import Layout from "./hocs/Layout";
import { useCheckToken } from "./hooks/useCheckToken";


function App() {

  const isAuth=false

  useCheckToken([isAuth])

  return ( 
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="todos" element={<Todos/>}/>
        <Route path="todos/add" element={<AddTodo/>}/>
      </Route>
    </Routes>
   );
}

export default App;