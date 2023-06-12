import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/header/Header.js';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(true);
  const[colaboradores,actualizarColaboradores]=useState([
    {
      id:uuid(),
      equipo: "Frontend",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id:uuid(), 
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:false
    },
    {
      id:uuid(),
      equipo: "Ux y diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id:uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:true
    }]);

    const [equipos,actualizarEquipos]= useState([
      {
        id:uuid(),
        titulo:"Programación",
        colorPrimario: "#57C278",
        colorSecundaria: "#D9F7E9"
      },
  
      {
        id:uuid(),
        titulo:"Frontend",
        colorPrimario: "#82CFFA",
        colorSecundaria: "#E8F8FF"
      },
      {
        id:uuid(),
        titulo:"Data Science",
        colorPrimario: "#A6D157",
        colorSecundaria: "#F0F8E2"
      },
      {
        id:uuid(),
        titulo:"Devops",
        colorPrimario: "#E06B69",
        colorSecundaria: "#FDE7E8"
      },
      {
        id:uuid(),
        titulo:"Ux y diseño",
        colorPrimario: "#D86EBF",
        colorSecundaria: "#FAE9F5"
      },
      {
        id:uuid(),
        titulo:"Movil",
        colorPrimario: "#FFBA05",
        colorSecundaria: "#FFF5D9"
      },
      {
        id:uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundaria: "#FFEEDF"
      }
   
          
  ])
  //condicion && se muestra
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registar equipos

  const registroColaborador=(colaborador)=>{
    console.log("nuevo registro", colaborador)
    actualizarColaboradores([...colaboradores,colaborador]);
    //spread operator

  } 

  //eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor=(color,id)=>{
    console.log("actualizar: ",color,id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  //crear equipos
  const crearEquipo = (nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid}])

  }

  const like=(id)=>{
    const colaboradoresActualizados= colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
       return colaborador 
        
    })
  }


  //ternario --> condicion ? seMuestra : noSeMuestra

  return (
    <div>
     <Header/>
     {/* {mostrarFormulario ? <Formulario/> : ""} */}
     {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registroColaborador={registroColaborador}
      crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}
      />
      
      {
        equipos.map((equipo)=>
        <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaboradores=> colaboradores.equipo===equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer/>
    </div>
  );
}


export default App;
