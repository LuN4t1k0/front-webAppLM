import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function FormLicense() {

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
    addNewlicense(data)
  };

  const addNewlicense = async (payload) => {
    console.log(payload);
    try {
      if (payload) {
        //const res = await axios.post("url", payload);
        toast.success('Licencia agregada', {
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

    } catch (error) {
      console.log(error);
    }
  }

  const tipoLicencia = [
    { key: 1, value: "Enfermedad o accidente común" },
    { key: 2, value: "Medicina preventiva" },
    { key: 3, value: "Pre y postnatal" },
    { key: 4, value: "Enfermedad grave del niño menor del año" },
    { key: 5, value: "Accidente del trabajo o del trayecto" },
    { key: 6, value: "Enfermedad profesional" },
    { key: 7, value: "Patologías del embarazo" },
  ];

  const tipoReposo = [
    { key: 1, value: "Parcial" },
    { key: 2, value: "Total" }
  ];

  const estado = [
    { key: 1, value: "Pendiente" },
    { key: 2, value: "Aprobada" },
    { key: 3, value: "Reducida" },
    { key: 4, value: "Rechazada" }
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
    { key: 27, value: 'Médico Medicina Física y Rehabilitación' },
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
                {...register("rut_empresa", { required: true })}
                type='text'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.rut_empresa && <span>Este campo es obligatorio</span>}
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
              {errors.rut_trabajador && <span>Este campo es obligatorio</span>}
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
              {errors.fecha_emision && <span>Este campo es obligatorio</span>}
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
              {errors.fecha_inicio && <span>Este campo es obligatorio</span>}
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
              {errors.cantidad_dias && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de licencia
            </label>
            <div className="mt-2">
              <select {...register("tipo_licencia", {required:true})} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {tipoLicencia.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.tipo_licencia && <span>Este campo es obligatorio</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de reposo
            </label>
            <div className="mt-2">
              <select  {...register("tipo_reposo", { required: true })} className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {tipoReposo.map((tipo) => {
                  return (
                    <option key={tipo.key} value={tipo.value}>{tipo.value}</option>
                  )
                })}
              </select>
              {errors.tipo_reposo && <span>Este campo es obligatorio</span>}
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
              {errors.lugar_reposo && <span>Este campo es obligatorio</span>}
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
                {...register("rut_profesional", { required: true })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
              />
              {errors.rut_profesional && <span>Este campo es obligatorio</span>}
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