import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import {ContextProvider } from './context/Context';
import Login from "./pages/Login";
import Licenses from "./pages/Licenses";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route element={<Licenses />} path="/licenses" />
              <Route element={<Perfil />} path="/perfil" />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
