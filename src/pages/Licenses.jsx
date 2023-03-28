
import React, { useContext } from "react";
import Context from "../context/Context";
import UserTable from "../components/UserTable";
import RrhhUserTable from "../components/RrhhUserTable";


export default function Licenses() {
  const {rol} = useContext(Context);

  const renderTitle = () => {
    switch (rol) {
      case 'cliente':
        return (<h1 className="text-2xl font-semibold text-gray-900">Mis licencias</h1>)
      case 'rrhh':
        return (<h1 className="text-2xl font-semibold text-gray-900">Listado de licencias</h1>)
    }
  }

  const renderTable = () => {
    switch (rol) {
      case 'cliente':
        return (<UserTable/>)
      case 'rrhh':
        return (<RrhhUserTable/>)
    }
  }

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        { rol && renderTitle() }
      </div>       
      { rol && renderTable() }
    </div>
  );
}
