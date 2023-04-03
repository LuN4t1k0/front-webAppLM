import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//import FormatDate from "../hooks/FormatDate";

export default function Modal({ isOpen, closeModal, modalData }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform  overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
                <div>
                  <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-3 sm:px-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Datos de la licencia
                      </h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <dl className="grid grid-cols-1 text-center lg:grid-cols-3">
                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Folio:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.folio}
                          </dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Rut empresa:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.rutEmpresa}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Rut trabajador:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.rutEmpleado}
                          </dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Fecha emisión:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.fechaEmision}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Fecha de inicio:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.fechaInicio}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Fecha de termino:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.fechaTermino}
                          </dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Cantidad de días:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.cantidadDias}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Tipo de Licencia:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.tipoLicencia}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Tipo de reposo:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.tipoReposo}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Lugar de reposo:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.lugarReposo}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Institución:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.institucion}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Rut profesional:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.rutProfesional}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Especialidad:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.especialidad}
                          </dd>
                        </div>

                        <div className= "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-semibold text-gray-500">
                            Estado:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {modalData?.estado}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-3 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-3 m-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
