import axios from "axios";
import { createContext, useState, useEffect } from "react";
import jwt from 'jwt-decode';

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState('');

  return (
    <Context.Provider value={{user, setUser, rol, setRol}} >
        {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context