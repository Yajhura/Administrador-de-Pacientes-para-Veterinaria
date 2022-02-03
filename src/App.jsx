import { useState } from "react";
import { useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Listado from "./componentes/ListadoPaciente";
import './index.css'
function App() {
   const [pacientes,setPacientes] = useState([])
   const [pacienteActualizado,setPacienteActualizado] = useState({})
      

   useEffect(() => {
     const obtenerLS = ()=>{
       const pacienteLS = JSON.parse(localStorage.getItem("pacientes") ) ?? []
       setPacientes(pacienteLS)
     }
     obtenerLS()
     
   }, []);
   useEffect(()=>{
   localStorage.setItem("pacientes",JSON.stringify(pacientes))
   
   },[pacientes])

   const eliminarPaciente = (id)=>{
       
      const pacienteEliminado = pacientes.filter(paciente => paciente.id !== id)
      setPacientes(pacienteEliminado)
   }
  return (
    <>
      <div className="container mx-auto mt-10">
      <Header />
        
       <div className="mt-12 md:flex p-2 ">
       <Formulario
         pacientes={pacientes}
         setPacientes ={setPacientes}
         pacienteActualizado={pacienteActualizado}
         setPacienteActualizado={setPacienteActualizado}
       />
       <Listado
       pacientes={pacientes}
       setPacienteActualizado={setPacienteActualizado}
       eliminarPaciente={eliminarPaciente}
       />
       </div>
      </div>
    </>
  );
}

export default App;
