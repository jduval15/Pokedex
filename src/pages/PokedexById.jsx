import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../components/pokedexId/pokedexId.css"
import Pokemon404 from '../components/pokedexId/Pokemon404'
import PokemonMoves from '../components/pokedexId/PokemonMoves'

const PokedexById = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true)
      setHasError(false)
      
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        const res = await axios.get(URL)
        setPokemon(res.data)
      } catch (err) {
        console.error(err)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

  if (isLoading) {
    return (
      <div className="poke-id">
        <div className="loading-container">
          <div className="pokeball-loader"></div>
          <p>Loading Pokémon...</p>
        </div>
      </div>
    )
  }

  if (hasError) {
    return <Pokemon404 />
  }

  if (!pokemon) {
    return null
  }

  const mainType = pokemon.types[0].type.name

  return (
    <article className='poke-id'>
      <Link to="/pokedex" className="poke-id__back-link">
        ← Back to Pokédex
      </Link>

      <header className={`poke-id__header bg-${mainType}`}>
        <img 
          className='poke-id__img' 
          src={pokemon.sprites.other["official-artwork"].front_default} 
          alt={`${pokemon.name} official artwork`}
        />
      </header>

      <section className="poke-id__main-info">
        <h1 className={`poke-id__name letter-${mainType}`}>
          #{pokemon.id} {pokemon.name}
        </h1>
        
        <div className="poke-id__measurements">
          <div className="poke-id__measurement">
            <span className="measurement-label">Height</span>
            <span className="measurement-value">{pokemon.height / 10} m</span>
          </div>
          <div className="poke-id__measurement">
            <span className="measurement-label">Weight</span>
            <span className="measurement-value">{pokemon.weight / 10} kg</span>
          </div>
        </div>
      </section>

      <div className='poke-id__info'>
        <section className='poke-id__section'>
          <h2 className='poke-id__section-title'>Types</h2>
          <ul className='poke-id__types-container'>
            {pokemon.types.map(type => (
              <li 
                key={type.slot} 
                className={`poke-id__type bg-${type.type.name}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </section>

        <section className='poke-id__section'>
          <h2 className='poke-id__section-title'>Abilities</h2>
          <ul className='poke-id__types-container'>
            {pokemon.abilities.map(ability => (
              <li 
                key={ability.slot} 
                className='poke-id__ability'
              >
                {ability.ability.name}
                {ability.is_hidden && <span className="hidden-tag"> (Hidden)</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className='poke-id__section poke-id__section--stats'>
          <h2 className='poke-id__section-title'>Base Stats</h2>
          <ul className='poke-id__stats-list'>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name} className='poke-id__stat-item'>
                <span className='stat-name'>{stat.stat.name}</span>
                <div className="stat-bar-container">
                  <div 
                    className={`stat-bar bg-${mainType}`}
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
                <span className='stat-value'>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className='poke-id__moves-section'>
        <h2 className={`poke-id__section-title bg-${mainType}`}>
          Moves ({pokemon.moves.length})
        </h2>
        <PokemonMoves pokemon={pokemon} />
      </section>
    </article>
  )
}

export default PokedexById