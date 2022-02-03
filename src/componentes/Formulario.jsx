import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Error from "./error";


const Formulario = (props) => {
  
 //props
    const {pacientes,setPacientes,pacienteActualizado,setPacienteActualizado} = props

 
    const [paciente,setPaciente] = useState({
        mascota: "" ,
        proietario: "",
        email: "",
        alta: "",
        sintomas: "",
        
    });
   
    //pasar los datos al formulario al dar editar con usseEfeect
    const {mascota,proietario,email,alta,sintomas} = paciente;
    
    useEffect( ()=>{
         if (Object.keys(pacienteActualizado).length> 0) {
            setPaciente(
              {  mascota : pacienteActualizado.mascota,
                proietario : pacienteActualizado.proietario,
                email: pacienteActualizado.email,
                alta: pacienteActualizado.alta,
                sintomas: pacienteActualizado.sintomas,}
            )
         }
         
         
    },[pacienteActualizado])
     
  
    
    const  actualizarPaciente = e =>{
         setPaciente(
             {...paciente,
            [e.target.name] : e.target.value}
         )
         
    }
     //crear errores
     const [error,setError] = useState(false)


    
    const handdleSubmit = (e) =>{
        e.preventDefault();
       
        if ([mascota,proietario,email,alta,sintomas].includes("")) {
           setError(true)
         return;
            
        }
        setError(false)
        
        //editar
        if (pacienteActualizado.id) {
          paciente.id = pacienteActualizado.id
          
          const pacienteEditado  = pacientes.map(pacienteActualizado => pacienteActualizado.id === paciente.id ? paciente :pacienteActualizado )

          setPacientes(pacienteEditado)
          setPacienteActualizado({})
            
        }else{
            paciente.id = uuidv4()
            setPacientes([...pacientes,paciente])
            
        }

      

        //reiniciar el formulario
        setPaciente(
            {
                mascota: "" ,
                proietario: "",
                email: "",
                alta: "",
                sintomas: ""
            }
        )
        
    }
  return (
    <div className="md:w-1/2 lg:w-2/5 h-3/4 mx-5 bg-white rounded-lg p-2 mb-5">
      <h2 className="font-black text-2xl mt-2 text-blue-500 text-center">Seguimiento de Paciente</h2>

      <p className="text-xl text-center my-7 font-black">
          Añade pacientes y {''}
          <span className=" block text-indigo-500">Administralos</span>
      </p>
        
      {error? <Error>Todo los campos son obligatorios!!</Error> : null}
      <form 
      onSubmit={handdleSubmit}
      className="bg-mazarine p-4  shadow-md rounded-md text-md">
          <div className="mb-5">
              <label
              className="text-white uppercase font-bold block" 
              htmlFor="mascota">Nombre Mascota</label>
              <input 
              type="text" 
              name="mascota"
              id="mascota" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus:border-indigo-600"
              placeholder="Escribe aqui el nombre de tu mascota"
              value={mascota}
              onChange={actualizarPaciente}
              />
          </div>
          
          <div className="mb-5">
              <label
              className="text-white uppercase font-bold block" 
              htmlFor="proietario">Nombre del Proietario</label>
              <input 
              type="text" 
              name="proietario"
              id="proietario" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus:border-indigo-600"
              placeholder="Escribe aqui el nombre del Propietario"
              value={proietario}
              onChange={actualizarPaciente}
              />
          </div>

          <div className="mb-5">
              <label
              className="text-white uppercase font-bold block" 
              htmlFor="email">Correo</label>
              <input 
              type="email" 
              name="email"
              id="email" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus:border-indigo-600"
              placeholder="Escribe tu correo electronico"
              value={email}
              onChange={actualizarPaciente}
              />
          </div>

          <div className="mb-5">
              <label
              className="text-white uppercase font-bold block" 
              htmlFor="alta">Alta</label>
              <input 
              type="date" 
              name="alta"
              id="alta" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none focus:border-indigo-600"
              value={alta}
              onChange={actualizarPaciente}
              />
          </div>
          <div className="mb-5">
              <label
              className="text-white uppercase font-bold block" 
              htmlFor="sintomas">Sintomas</label>
              <textarea 
              type="date" 
              name="sintomas"
              id="sintomas" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400 focus:outline-none max-h-44 focus:border-indigo-600"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={actualizarPaciente}
         
              />
          </div>
       <input type="submit" 
       className="bg-blue-600 rounded-md hover:opacity-80 w-full p-3 font-bold text-white cursor-pointer  "
       value={pacienteActualizado.id? 'Editar Paciente' : "Agregar Paciente"} 
       />
      </form>
    </div>
  );
};

export default Formulario;
