import { useState } from "react";
import { Link } from "react-router-dom";

const Git = () => {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState({});
    // Funcion fetch
    const fetchUser = async () => {
        try { const response = await fetch(`https://api.github.com/users/${search}`) 
    const data = await response.json();
        setUser(data)
    }catch (error) {
            console.log("error"), error.message
        }
    }
    return (
        <div>
            <div>
                <h1>
                    Buscador GitHub
                </h1>
                <div>
                <Link to="/">Inicio</Link>
                </div>
                <div className="grid">
                    <input type="text" placeholder="Ingresa usuario" onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div>
                    <button className="btn" onClick={fetchUser}>Buscar</button>
                </div>
                <article>
                    <div>
                        <img src={user.avatar_url} alt="" />
                        <h4>{user.login}</h4>
                        <p>{user.bio}</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Git;