import { useState } from "react"
import "./MiOrg.css"

const MiOrg=(props)=>{

   const [Mostrar, actualizarMostrar]= useState(true)
    // const[nombreVariavle,FuncionActualiza] = usesState(calorInicial)
    //const manejarClick=()=>{
        //Estado - hooks- 
        //useState utiliza estado
        //Se usa la funcion useState()
  /*       console.log("Mostrar/Ocultar", !Mostrar)
      actualizarMostrar(!Mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/agregar.png" alt="PRUEBAS" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg

