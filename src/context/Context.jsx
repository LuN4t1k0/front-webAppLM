import axios from "axios";
import { createContext, useState, useEffect } from "react";
import jwt from 'jwt-decode';

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState('');
  
  async function getInfo() {
    const token = localStorage.getItem("token");
    const tokenObject = jwt(token);
    setRol(tokenObject.role);
    try {
      const res = await axios.get(`https://previleyapp-production.up.railway.app/api/v1/empleados/${tokenObject.rut}`, {
        headers: {Authorization: "Bearer " + token}
      });
      const { data } = await res;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Context.Provider value={{user, setUser, rol}} >
        {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context