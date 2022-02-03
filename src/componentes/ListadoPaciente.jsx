
import Paciente from "./Paciente";

const Listado = ({ pacientes,setPacienteActualizado,eliminarPaciente }) => {
 
  return (
    <div className={`md:w-1/2 lg:w-3/5 md:h-screen ${pacientes.length > 3? `md:overflow-y-scroll`: null}`}>
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-white text-2xl">
            Listado de Paciente
          </h2>
          <p className="mt-5 text-center text-xl text-white">
            Administra tus {""}
            <span className="text-yellow-300 font-black">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPacienteActualizado={setPacienteActualizado}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-white text-2xl">
            No hay Pacientes
          </h2>
          <p className="mt-5 text-center text-xl font-black text-white">
            Crea tus Pacientes {""}
            <span className="text-yellow-300 font-black">
              y Administralos
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Listado;
