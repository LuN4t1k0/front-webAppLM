import { Fragment, useState, useContext } from "react";
import Context from "../context/Context";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "../components/icons/XMarkIcon";
import { Bars3Icon } from "../components/icons/Bars3Icon";
import UserNavigation from "../components/UserNavigation";
import RrhhNavigation from "../components/RrhhNavigation";

export default function Sidebar() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {user} = useContext(Context);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const renderList = () => {
    switch (user?.usuario?.tipo_rol) {
      case 'basico':
        return (
          <UserNavigation/>
        );
      case 'rrhh':
        return (
          <RrhhNavigation/>
        );
    }
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <nav className="mt-5 space-y-1 px-2">{renderList()}</nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center justify-center">
                      <span className="ml-3">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={logout}
                        >Cerrar sesión
                        </button>
                      </span>
                    </div>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
              {renderList()}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
              <div className="flex items-center justify-center">
                <span className="ml-3 hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={logout}
                  >Cerrar sesión
                  </button>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
