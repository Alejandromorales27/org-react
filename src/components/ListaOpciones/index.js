import "./ListaOpciones.css"

const ListaOpciones =()=>{

    // metodo map -> arreglo.map( (equipo,index)=> {
    // return <option>{}</option>
    //} )
    const equipos= [
        "Programación",
        "Frontend",
        "Data Science",
        "Devops",
        "Ux y diseño",
        "Movil",
        "Innovación y Gestión"
            
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>

        <select>
            {equipos.map((equipo,index)=>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
} 

export default ListaOpciones