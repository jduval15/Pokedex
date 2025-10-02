import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({ setTypeSelected, setPage }) => {
  const [types, setTypes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const URL = 'https://pokeapi.co/api/v2/type/'
        const res = await axios.get(URL)
        setTypes(res.data.results)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTypes()
  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setPage(1)
  }

  return (
    <div className="select-wrapper">
      <label htmlFor="type-select" className="visually-hidden">
        Filter by Pokémon type
      </label>
      <select 
        id="type-select"
        onChange={handleChange}
        disabled={isLoading}
        className="pokedex__select"
        aria-label="Filter Pokémon by type"
      >
        <option value="All Pokemons">
          {isLoading ? 'Loading types...' : 'All Pokémon'}
        </option>
        {types.map(type => (
          <option key={type.url} value={type.url}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectByType