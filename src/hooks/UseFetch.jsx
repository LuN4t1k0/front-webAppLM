import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Context from "../context/Context";

export default function UseFetch() {
  const [search, setSearch] = useState('');
  const { setUser } = useContext(Context);


  const fetch = async () => {
    const token = localStorage.getItem("token");
    const query = `?limit=10&offset=0&folio=${search}`
    console.log(`https://run.mocky.io/v3/b9d69ed6-9eba-45bd-acf9-89e565f808a8${query}`);
    if (search !== '') {
      try {
        const res = await axios.get(`https://run.mocky.io/v3/b9d69ed6-9eba-45bd-acf9-89e565f808a8${query}`, {
          headers: { Authorization: "Bearer" + token }
        });
        const { data } = await res;
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    } 
  }

  useEffect(() => {

    if (search !== '') {
      fetch();
    }
  }, [search]);

  return { search, setSearch };

}