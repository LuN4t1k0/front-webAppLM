import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VistaPrincipal from "./pages/VistaPrincipal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/usuario" element={ <VistaPrincipal /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
