import axios from "axios";
import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  async function getInfo() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("https://run.mocky.io/v3/b9d69ed6-9eba-45bd-acf9-89e565f808a8", {
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
  }, []);

  return (
    <Context.Provider value={{user, setUser}} >
        {children}
    </Context.Provider>
  );
};

export { ContextProvider };

export default Context