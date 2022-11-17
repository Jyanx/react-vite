import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../Service"
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
//vamos a ver como podemos ejecutar la funcion para traer los pokemones

const Home = () => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    // Debemos crear una funcion que ejecute getDataFromPokemon
    const [pokemons, setPokemon] = useState([]);
    const fetchPokemonList = async () => {
        const listPokemones = await getDataFromPokemon();
        console.log("lista", listPokemones.results)
        setPokemon(listPokemones)
    };

    useEffect(() => {
        fetchPokemonList();
    }, [])

    return (
        <Container>
            <h1>Pokedex</h1>
            <Grid spacing={3}>
                {pokemons.map((lista, index) => (


                    <Grid item md={4} lg={4} sm={12}>
                        <Card className="card-pokemon">
                            <CardMedia component="img" className="img-pokemon" image={`${imgUrl}${index + 1}.svg`} />
                            <CardContent>
                            <h3>{lista.name}</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default Home;