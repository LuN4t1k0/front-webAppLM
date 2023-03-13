import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  
  async function getInfo() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("https://run.mocky.io/v3/64c6597d-c467-44d8-8966-e0cc44f1b03e", {
        headers: {Authorization: "Bearer" + token}
      });
      const { data } = await res;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInfo();
  }, [])

  
  

  return (
    <Context.Provider value={user}>
        {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context