import React, { useContext } from "react";
import Context from "../context/Context";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jwt from 'jwt-decode';

export const FormUser = () => {
  const { setUser, setRol, getUserInfo } = useContext(Context);
  const schema = yup.object({
    email: yup.string()
      .required()
      .email(),
    password: yup.string().required()
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
     login(data);
  };

  const login = async (payload) => {
    const loginEndpoint = "/auth/login";
    try {
      const { data } = await axios.post(import.meta.env.VITE_BASE_URL + loginEndpoint, payload);
      localStorage.setItem("token", data.token);
      getUserInfo();
      navigate('/licenses');
    } catch ({ response: { data: message } }) {
      alert("Error al iniciar sesión 🙁");
    }
  }
  
  return (
    <div className="flex min-h-full h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Licencias Médicas</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 min-w-[250px]"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: true })}
                  placeholder="correo@correo.cl"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 text-left font-medium" >
                  Este campo es requerido
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  {...register("password", { required: true })}
                  placeholder="Ingresa tu contraseña"
                  type="password" className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400 text-left font-medium" >
                  Este campo es requerido
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
