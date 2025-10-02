import React from 'react'
import { Link } from 'react-router-dom'
import './pokemon404.css'

const Pokemon404 = () => {
  return (
    <div className="pokemon-404">
      <div className="pokemon-404__content">
        <div className="pokemon-404__pokeball">
          <div className="pokeball-top"></div>
          <div className="pokeball-middle"></div>
          <div className="pokeball-bottom"></div>
          <div className="pokeball-center"></div>
        </div>
        
        <h1 className="pokemon-404__title">404</h1>
        <h2 className="pokemon-404__subtitle">Pokémon Not Found!</h2>
        <p className="pokemon-404__text">
          This Pokémon has fled! It might not exist or the name/ID is incorrect.
        </p>
        
        <Link to="/pokedex" className="pokemon-404__button">
          <span>← Return to Pokédex</span>
        </Link>
      </div>
    </div>
  )
}

export default Pokemon404