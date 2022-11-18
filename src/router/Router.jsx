import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import Ejemplo from "../Ejemplo"
import Header from "../Componentes/Header"
import Git from "../gitSearch/Git"
import Home from "../pages/Pokemon"
import Flags from "../pages/Flags"
import PrincipalImg from "../imagenes-pixabay/components/principaImg"
import Private from "../private"
import Login from "../pages/Login"




const Router = () => {
    return (


        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Login />} />


                {/* Rutas privadas */}
                <Route element={<Private />}>
                    <Route path="/git" element={<Git />} />
                    <Route path="/pokemon" element={<Home />} />
                    <Route path="/banderas" element={<Flags />} />
                    <Route path="/ejemplo" element={<Ejemplo />} />
                    <Route path="/imagen" element={<PrincipalImg />} />
                </Route>

            </Routes>

        </BrowserRouter>


    )
}

export default Router;