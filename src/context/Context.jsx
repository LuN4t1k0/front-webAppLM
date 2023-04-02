import axios from "axios";
import { createContext, useState } from "react";
import jwt from 'jwt-decode';

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState('');

  const getUserInfo = async () => {
    const token = localStorage.getItem('token');
    const tokenObject = jwt(token);
      setRol(tokenObject.role);
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/empleados/${tokenObject.rut}`, {
        headers: {Authorization: "Bearer " + token}
      });
      const info  = await res.data;
      setUser(info);
  }

  return (
    <Context.Provider value={{user, setUser, rol, setRol, getUserInfo}} >
        {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context