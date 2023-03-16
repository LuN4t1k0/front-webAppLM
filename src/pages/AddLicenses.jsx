import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../context/Context";
import FormLicense from "../components/FormLicense";


export default function AddLicenses() {
  const {user} = useContext(Context);

  return (
    <>
      {user?.usuario?.tipo_rol === 'rrhh' ? (
        <>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Agregar licencia</h1>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="px-4 sm:px-6 lg:px-8">
                <FormLicense/>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : <Navigate to="/licenses" />}
    </>
  );
}

