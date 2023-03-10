import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          
          <Route element={ <PrivateRoutes/> }>
            <Route element={ <Dashboard/> } path="/dashboard"/>
            <Route element={ <Perfil/> } path="/perfil"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
