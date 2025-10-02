import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import Pagination from '../components/pagination/Pagination'
import "../index.css"
import "./styles/pokedex.css"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [typeSelected, setTypeSelected] = useState("All Pokemons")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [pokePerPage] = useState(8)

  const userName = useSelector(state => state.userName)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    
    const fetchPokemons = async () => {
      try {
        if (typeSelected !== "All Pokemons") {
          const res = await axios.get(typeSelected)
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        } else {
          const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
          const res = await axios.get(URL)
          setPokemons(res.data.results)
        }
      } catch (err) {
        console.error(err)
        setError('Failed to load Pokémon. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemons()
  }, [typeSelected])

  const paginatedPokemons = useMemo(() => {
    const initialPoke = (page - 1) * pokePerPage
    const finalPoke = page * pokePerPage
    return pokemons.slice(initialPoke, finalPoke)
  }, [pokemons, page, pokePerPage])

  const totalPages = useMemo(() => 
    Math.ceil(pokemons.length / pokePerPage), 
    [pokemons.length, pokePerPage]
  )

  return (
    <div className="pokedex-page">
      <header className='pokedex__header-container'>
        <img 
          className='pokedex__img' 
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" 
          alt="Pokédex logo" 
        />
        <p className='pokedex__header-p'>
          Welcome <span className='userName'>{userName}</span>, here you can find your favorite Pokémon.
        </p>
      </header>

      <aside className='pokedex__aside'>
        <InputSearch />
        <SelectByType setPage={setPage} setTypeSelected={setTypeSelected} />
      </aside>

      {error && (
        <div className="error-container">
          <p className="error-text">{error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="loading-container">
          <div className="pokeball-loader"></div>
          <p>Loading Pokémon...</p>
        </div>
      ) : (
        <>
          <div className='card__container'>
            {paginatedPokemons.length > 0 ? (
              paginatedPokemons.map(pokemon => (
                <CardPoke
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
            ) : (
              <p className="no-results">No Pokémon found</p>
            )}
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              setPage={setPage} 
              page={page} 
              pagesLength={totalPages}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Pokedex