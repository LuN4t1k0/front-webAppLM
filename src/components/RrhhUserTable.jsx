import { useState, useContext } from "react";
import Context from "../context/Context";
import Modal from "./Modal";
import FormatDate from "../hooks/FormatDate";
//import { MagnifyingGlassIcon } from "../components/icons/MagnifyingGlassIcon";
//import UseFetch from "../hooks/useFetch";


export default function RrhhUserTable() {
  const {user} = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  //const { search, setSearch } = UseFetch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handlerSearch = (e) => {
    e.preventDefault()
    const text = e.target.value;
    setSearch(text);
  }


  return (
    <>
{/*       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="-mx-4 sm:-mx-0 min-w-[320px] ">
            <label htmlFor="account-number" className="block text-sm font-medium leading-6 text-gray-900">
              Buscar licencia
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa el folio de una licencia"
                onChange={handlerSearch}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 mt-8 sm:-mx-0">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Folio
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Tipo de licencia
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Fecha de inicio
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Fecha de termino
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Días
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Estado
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {user?.licenciasMedicas?.map((licencia, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {licencia.folio}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {licencia.tipoLicencia}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {licencia.fechaInicio}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {licencia.fechaTermino}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {licencia.cantidadDias}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {licencia.estado}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button
                        onClick={() => { openModal(true), setModalData(licencia) }}
                      >
                        Ver más
                      </button>
                      <Modal isOpen={isOpen} closeModal={closeModal} modalData={modalData} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}