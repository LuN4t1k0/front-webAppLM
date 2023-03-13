import React, { useContext } from "react";
import Context from "../context/Context";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function AddLicenses() {
  const user = useContext(Context);

  const schema = yup.object({
    folio: yup.string().required(),
    rut_empresa: yup.string().required().matches(/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, 'No es el formato'),
    rut_trabajador: yup.string().required().matches(/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, 'No es el formato'),
    fecha_emision: yup.string().required(),
    fecha_inicio: yup.string().required(),
    cantidad_dias: yup.number().required(),
    tipo_licencia: yup.string().required(),
    tipo_reposo: yup.string().required(),
    lugar_reposo: yup.string().required(),
    institucion: yup.string().required(),
    rut_profesional: yup.string().required().matches(/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, 'No es el formato'),
    especialidad: yup.string().required(),
    estado: yup.string().required()
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <>
      {user?.usuario?.tipo_rol && (
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Agregar licencia</h1>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="-mx-4 mt-8 sm:-mx-0">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="gap-3 grid md:grid-cols-2 md:gap-x-5 md:gap-y-3 lg:gap-x-8 xl:gap-x-11"
                  >
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Folio
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("folio", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.folio && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Rut empresa
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("rut_empresa", { required: true })}
                          type='text'
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.rut_empresa && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Rut trabajador
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("rut_trabajador", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.rut_trabajador && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Fecha de emisión
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("fecha_emision", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.fecha_emision && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Fecha de inicio
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("fecha_inicio", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.fecha_inicio && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Cantidad de días
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("cantidad_dias", { required: true })}
                          type="number"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.cantidad_dias && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Tipo de licencia
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("tipo_licencia", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.tipo_licencia && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Tipo de reposo
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("tipo_reposo", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.tipo_reposo && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Lugar de reposo
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("lugar_reposo", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.lugar_reposo && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Institución
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("institucion", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.institucion && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Rut profesional
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("rut_profesional", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.rut_profesional && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Especialidad
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("especialidad", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.especialidad && <span>This field is required</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Estado
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("estado", { required: true })}
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder=""
                        />
                        {errors.estado && <span>This field is required</span>}
                      </div>
                    </div>

                    <div className="flex justify-end mt-5">
                      <button
                        type="submit"
                        className="px-3 bg-purple-400 rounded-md text-sm h-10"
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

