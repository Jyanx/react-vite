import { useState } from "react"
import { Link } from "react-router-dom";
const Ejemplo =()=>{
const [nombre,setNombre] = useState("Jean");
const cambiarNombre=(nuevo)=>{
    setNombre(nuevo)
}
    return(
    <div>
        <div>
        <Link to="/">Inicio</Link>
        </div>
        <h1>Mi Primer Componente</h1>
        <p>Mi Nombre: <strong className={nombre.length <=4 ? 'verde' : 'azul'}>{nombre}</strong> </p>
        <p>Mi Apellido: </p>
        <input type="text" placeholder="Cambiar el nombre" onChange={e=>cambiarNombre(e.target.value)} />
        <button onClick={e=>cambiarNombre("Jyan")}>Cambiar el nombre</button>
    </div>
    )
}

export default Ejemplo