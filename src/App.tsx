import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


interface Pokemons {
    name: string;
    url: string;
}

interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

// functional component
const App: React.FC = () => {
    const [pokemons, setPokemons] = useState<string[]>([]);
    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                setPokemons((p) => [...p, poke.data])
            })
        }
        getPokemon()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <header className="pokemon-header">Pokemon</header>
            </div>
        </div>
    );
}

export default App;
