import CampoTexto from "../CampoTexto"
import "./formulario.css"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="ingresar Puesto"/>
            <CampoTexto titulo ="Foto" placeholder="ingresar enlace de Foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
        </section>
}

export default Formulario