import { useState } from "react"
import Campo from "../Campo"
import "./formulario.css"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props)=>{

    const [nombre,actualizarNombre]= useState("")
    const [puesto,actualizarPuesto]= useState("")
    const [foto,actualizarFoto]= useState("")
    const [equipo,actualizarEquipo]=useState("")

    const[titulo,actualizarTitulo]=useState("")
    const[color,actualizarColor]=useState("")

    const{registroColaborador,crearEquipo}=props
    

    const manejarEnvio=(evento)=>{
        evento.preventDefault();

        console.log("manejar el envio")
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }

        registroColaborador (datosAEnviar)
        
    }

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>

            <Campo 
                titulo="Nombre" 
                placeholder="ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <Campo 
                titulo="Puesto" 
                placeholder="ingresar Puesto" 
                required valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />

            <Campo 
                titulo ="Foto" 
                placeholder="ingresar enlace de Foto" 
                required valor={foto} 
                actualizarValor={actualizarFoto} 
            />

            <ListaOpciones valor ={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}/>
            
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>

            <Campo 
                titulo="Titulo" 
                placeholder="ingresar titulo" 
                required valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                titulo="Color" 
                placeholder="ingresar el color en hexa" 
                required valor={color} 
                actualizarValor={actualizarColor} 
            />
            <Boton>Registrar equipo</Boton>
            </form>
        </section>
}

export default Formulario