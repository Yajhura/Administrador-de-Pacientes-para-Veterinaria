import { useEffect } from "react";


const Paciente = ({ paciente,setPacienteActualizado,eliminarPaciente }) => {
  const { mascota, proietario, email, alta, sintomas,id } = paciente;
    

      const handleEliminar = ()=>{
        Swal.fire({
          title: "Deseas eliminar este Usuario",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminalo'
          
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'Has eliminado este Paciente.',
              'success'
              
            )
            eliminarPaciente(id)
          }
        })
      }
      
  return (
    <div
      className=" text-xs m-3 bg-white shadow-2xl px-5 py-5 rounded-xl 
              md:w-5/6 mx-auto"
    >
      <p className="font-bold uppercase text-gray-700 mb-4">
        Nombre: {""}
        <span className="font-normal">{mascota}</span>
      </p>
      <p className="font-bold uppercase text-gray-700  mb-4">
        Propietario: {""}
        <span className="font-normal">{proietario}</span>
      </p>
      <p className="font-bold uppercase text-gray-700  mb-4">
        Correo: {""}
        <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold uppercase text-gray-700  mb-4">
        Alta: {""}
        <span className="font-normal">{alta}</span>
      </p>
      <p className="font-bold uppercase text-gray-700  mb-4">
        Sintomas: {""}
        <span className="font-normal">{sintomas}</span>
      </p>
      <div className="flex flex-col">
          <button className="p-1 mt-2 w-full rounded-md text-white bg-blue-500 font-black" type="button"
          onClick={()=>setPacienteActualizado(paciente)}
          >Editar</button>
          
          <button className="p-1 mt-2 w-full rounded-md text-white font-black bg-red-500" 
          type="button"
          onClick={handleEliminar}
          >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
