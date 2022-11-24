import React from 'react';
import {Pokemon, PokemonDetail} from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css"
import {Detail} from "../App";

interface Props {
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setDetail} = props;
    const selectPokemon = (id: number) => {
        setDetail({
            id: id,
            isOpened: true
        })
    }
    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon) => {
                    return (
                        <div onClick={() => selectPokemon(pokemon.id)}>
                            <PokemonList
                                viewDetail={viewDetail}
                                setDetail={setDetail}
                                key={pokemon.id}
                                name={pokemon.name}
                                id={pokemon.id}
                                abilities={pokemon.abilities}
                                image={pokemon.sprites.front_default}
                            />

                        </div>
                    )
                })}
            </section>
        </div>
    );
};

export default PokemonCollection;
