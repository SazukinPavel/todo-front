import { Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Layout/>}>

      </Route>
    </Routes>
   );
}

export default App;