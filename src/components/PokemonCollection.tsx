import React from 'react';
import {Pokemon} from "../interface";

interface Props {
    pokemons: Pokemon[]
}

const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons} = props;
    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon) => {
                    return (
                        <div>
                            {pokemon.name}
                        </div>
                    )
                })}
            </section>
        </div>
    );
};

export default PokemonCollection;
