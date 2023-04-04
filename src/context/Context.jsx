import axios from "axios";
import { createContext, useState } from "react";
import jwt from 'jwt-decode';

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState('');
  const [rutEmpresa, setRutEmpresa] = useState('');

  const getUserInfo = async () => {
    const token = localStorage.getItem('token');
    const tokenObject = jwt(token);
    setRol(tokenObject.role);
    setRutEmpresa(tokenObject.rutEmpresa);
    if (tokenObject.role === 'cliente') {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/empleados/${tokenObject.rut}`, {
        headers: { Authorization: "Bearer " + token }
      });
      const info = await res.data;
      setUser(info);
    } if (tokenObject.role === 'rrhh') {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/empresas/${tokenObject.rutEmpresa}`, {
        headers: { Authorization: "Bearer " + token }
      });
      const rrhhInfo = await response.data;
      setUser(rrhhInfo);
    } else {
      console.log('else');
    }
  }

  return (
    <Context.Provider value={{ user, setUser, rol, setRol, getUserInfo, rutEmpresa }} >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context