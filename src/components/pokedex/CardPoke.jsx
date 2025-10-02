import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../pokedex/cardPoke.css"

const CardPoke = ({ url }) => {
    const [pokemon, setPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await axios.get(url)
                setPokemon(res.data)
            } catch (err) {
                console.error(err)
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPokemon()
    }, [url])

    const handleClick = () => {
        if (pokemon) {
            navigate(`/pokedex/${pokemon.id}`)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
        }
    }

    if (isLoading) {
        return (
            <article className="card-poke card-poke--loading">
                <div className="card-poke__skeleton"></div>
            </article>
        )
    }

    if (error || !pokemon) {
        return null
    }

    const mainType = pokemon.types[0].type.name

    return (
        <article 
            className={`card-poke border-${mainType}`} 
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${pokemon.name}`}
        >
            <header className={`card-poke__header bg-${mainType}`}>
                <img 
                    className='card-poke__sprite' 
                    src={pokemon.sprites.other["official-artwork"].front_default} 
                    alt={`${pokemon.name} official artwork`}
                    loading="lazy"
                />
            </header>

            <section className='card-poke__body'>
                <h3 className={`card-poke__name letter-${mainType}`}>
                    {pokemon.name}
                </h3>
                
                <ul className='card-poke__types-container' aria-label="Pokémon types">
                    {pokemon.types.map(type => (
                        <li key={type.slot} className='card-poke__type'>
                            {type.type.name}
                        </li>
                    ))}
                </ul>

                <p className='card-poke__type-label'>Type</p>
                
                <ul className='card-poke__stats-container' aria-label="Pokémon stats">
                    {pokemon.stats.map(stat => (
                        <li key={stat.stat.name} className='card-poke__stat'>
                            <span className='card-poke__stat-label'>
                                {stat.stat.name}
                            </span>
                            <span className={`card-poke__stat-number letter-${mainType}`}>
                                {stat.base_stat}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

export default CardPoke