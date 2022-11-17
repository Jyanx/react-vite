import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import Git from "../gitSearch/git"
import Ejemplo from "../Ejemplo"
import Home from "../pages/Pokemon"
import Flags from "../pages/Flags"

const Router =()=>{
    return(
        <BrowserRouter>

        {/*Aqui colocamos las rutas */}
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/flags" element={<Flags/>} />
            <Route path="/buscador" element={<Git/>} />
            <Route path="/ejemplo" element={<Ejemplo/>} />
            <Route path="/nosotros" element={<Git/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router