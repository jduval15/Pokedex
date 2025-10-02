import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const trimmedValue = searchValue.trim().toLowerCase()
    
    if (!trimmedValue) {
      setError('Please enter a Pokémon name or ID')
      return
    }

    navigate(`/pokedex/${trimmedValue}`)
    setSearchValue('')
    setError('')
  }

  const handleChange = e => {
    setSearchValue(e.target.value)
    if (error) setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-group">
        <input 
          className='pokedex__input' 
          id='search' 
          type="text" 
          placeholder='Find a Pokémon' 
          value={searchValue}
          onChange={handleChange}
          aria-label="Search Pokémon by name or ID"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'search-error' : undefined}
        />
        {error && <span id="search-error" className="error-message">{error}</span>}
      </div>
      <button className='pokedex__btn' type="submit">Search</button>
    </form>
  )
}

export default InputSearch