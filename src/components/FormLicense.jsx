import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

export default function FormLicense() {

  const schema = yup.object({
    folio: yup.string().required(),
    rutEmpresa: yup.string().required(),
    rutEmpleado: yup.string().required(),
    fechaEmision: yup.string().required(),
    fechaInicio: yup.string().required(),
    fechaTermino: yup.string().required(),
    cantidadDias: yup.number().required(),
    tipoLicencia: yup.string().required(),
    tipoReposo: yup.string().required(),
    lugarReposo: yup.string().required(),
    institucion: yup.string().required(),
    rutProfesional: yup.string().required(),
    especialidad: yup.string().required(),
    estado: yup.string().required()
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [submittedData, setSubmittedData] = useState({});

  const onSubmit = (data) => {
    addNewlicense(data);
  };
  
  const addNewlicense = async (payload) => {
    try {
      if (payload) {
        const token = localStorage.getItem('token');
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/licenciasMedicas`, payload, {
          headers: {Authorization: "Bearer " + token}
        });
        if(res.status === 201) {
          toast.success('Licencia agregada con exito', {
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
      }
    } catch (error) {
      toast.error('Error al agregar licencia', {
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
  }

  const tipoLicencia = [
    { key: 1, value: "enfermedad o accidente común" },
    { key: 2, value: "medicina preventiva" },
    { key: 3, value: "pre y postnatal" },
    { key: 4, value: "enfermedad grave del niño menor del año" },
    { key: 5, value: "accidente del trabajo o del trayecto" },
    { key: 6, value: "enfermedad profesional" },
    { key: 7, value: "patologías del embarazo" },

  ];

  const tipoReposo = [
    { key: 1, value: "parcial" },
    { key: 2, value: "total" }
  ];

  const estado = [
    { key: 1, value: "pendiente" },
    { key: 2, value: "aprobada" },
    { key: 3, value: "reducida" },
    { key: 4, value: "rechazada" }
  ];

  const EspecialistasMedicos = [
    { key: 1, value: 'Médico General de Zona' },
    { key: 2, value: 'Médico General de Atención Primaria' },
    { key: 3, value: 'Médico Familiar' },
    { key: 4, value: 'Médico Internista' },
    { key: 5, value: 'Médico Pediatra' },
    { key: 6, value: 'Médico Ginecólogo' },
    { key: 7, value: 'Médico Cirujano' },
    { key: 8, value: 'Médico Traumatólogo' },
    { key: 9, value: 'Médico Psiquiatra' },
    { key: 10, value: 'Médico Oftalmólogo' },
    { key: 11, value: 'Médico Otorrinolaringólogo' },
    { key: 12, value: 'Médico Neurólogo' },
    { key: 13, value: 'Médico Cardiólogo' },
    { key: 14, value: 'Médico Dermatólogo' },
    { key: 15, value: 'Médico Geriatra' },
    { key: 16, value: 'Médico Infectólogo' },
    { key: 17, value: 'Médico Broncopulmonar' },
    { key: 18, value: 'Médico Nefrólogo' },
    { key: 19, value: 'Médico Reumatólogo' },
    { key: 20, value: 'Médico Hematólogo' },
    { key: 21, value: 'Médico Oncólogo' },
    { key: 23, value: 'Médico Radiólogo' },
    { key: 24, value: 'Médico Anestesiólogo' },
    { key: 25, value: 'Médico Urgenciólogo' },
    { key: 26, value: 'Médico Rehabilitador' },
    { key: 27, value: 'Médico Medicina física y rehabilitación' },
    { key: 28, value: 'Médico Nutriólogo' },
    { key: 29, value: 'Médico Epidemiólogo' },
    { key: 30, value: 'Médico Salubrista' },
    { key: 31, value: 'Médico del Trabajo' },
  ];

  const institucion = [
    {key:1, value:'banmedica'},
    {key:2, value:'colmena'},
    {key:3, value:'consalud'},
    {key:4, value:'cruzblanca'},
    {key:5, value:'masvida'},
    {key:6, value:'vidatres'},
    {key:7, value:'fonasa'},  
  ]

  return (
    <>
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
              {errors.folio && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Rut empresa
            </label>
            <div className="mt-2">
              <input
                {...register("rutEmpresa", { required: true })}
                type='text'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.rutEmpresa && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Rut trabajador
            </label>
            <div className="mt-2">
              <input
                {...register("rutEmpleado", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.rutEmpleado && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Fecha de emisión
            </label>
            <div className="mt-2">
              <input
                {...register("fechaEmision", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.fechaEmision && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Fecha de inicio
            </label>
            <div className="mt-2">
              <input
                {...register("fechaInicio", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.fechaInicio && <span>Este campo es obligatorio</span>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Fecha de termino
            </label>
            <div className="mt-2">
              <input
                {...register("fechaTermino", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.fechaTermino && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Cantidad de días
            </label>
            <div className="mt-2">
              <input
                {...register("cantidadDias", { required: true })}
                type="number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.cantidadDias && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de licencia
            </label>
            <div className="mt-2">
              <select {...register("tipoLicencia", {required:true})} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {tipoLicencia.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.tipoLicencia && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de reposo
            </label>
            <div className="mt-2">
              <select  {...register("tipoReposo", { required: true })} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {tipoReposo.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.tipoReposo && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Lugar de reposo
            </label>
            <div className="mt-2">
              <input
                {...register("lugarReposo", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.lugarReposo && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Institución
            </label>
            <div className="mt-2">
              <select {...register("institucion", { required: true })} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {institucion.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.institucion && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Rut profesional
            </label>
            <div className="mt-2">
              <input
                {...register("rutProfesional", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.rutProfesional && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Especialidad
            </label>
            <div className="mt-2">
              <select {...register("especialidad", { required: true })} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {EspecialistasMedicos.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.especialidad && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Estado
            </label>
            <div className="mt-2">
              <select {...register("estado", { required: true })} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {estado.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.estado && <span>Este campo es obligatorio</span>}
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
    </>
  )
}