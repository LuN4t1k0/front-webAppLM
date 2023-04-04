import { useContext } from "react";
import Context from "../context/Context";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function Perfil() {
  const { user, getUserInfo, rol, rrhh } = useContext(Context);

  const schema = yup.object({
    telefono: yup.string().optional(),
    email: yup.string().optional(),
    direccion: yup.string().optional()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateInfo(data);
  };

  const updateInfo = async (payload) => {
    if (payload) {
      const newPayload = {
        telefono: payload.telefono,
        direccion: payload.direccion,
        usuario: {
          email: payload.email,
        }
      }
      try {
        const token = localStorage.getItem('token');
        const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/empleados/${user.rut}`, newPayload, {
          headers: { Authorization: "Bearer " + token }
        });
        getUserInfo();
        toast.success('Datos actualizados con exito', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
      catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="py-6">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 pb-6">Perfil</h1>
      </div>
      {rol === 'cliente' ?
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.nombre}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <input

                      defaultValue={user?.usuario.email}
                      {...register("email")}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="rut" className="block text-sm font-medium leading-6 text-gray-900">
                      Rut
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.rut}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.telefono}
                      {...register('telefono')}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                      Dirección
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.direccion}
                      {...register('direccion')}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
        :

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </label>
                    <input
                      type="text"
                      defaultValue={rrhh?.nombre}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <input

                      defaultValue={rrhh?.usuario.email}
                      {...register("email")}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="rut" className="block text-sm font-medium leading-6 text-gray-900">
                      Rut
                    </label>
                    <input
                      type="text"
                      defaultValue={rrhh?.rut}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      defaultValue={rrhh?.telefono}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                      Dirección
                    </label>
                    <input
                      type="text"
                      defaultValue={rrhh?.direccion}
                      disabled
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Guardar
                </button>
              </div> */}
            </div>
          </form>


        </div>
      }
    </div>
  )
}