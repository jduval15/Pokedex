import React, { useState, useMemo } from 'react'

const PokemonMoves = ({ pokemon }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  const filteredAndSortedMoves = useMemo(() => {
    let moves = pokemon?.moves || []
    
    // Filter by search term
    if (searchTerm) {
      moves = moves.filter(move => 
        move.move.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort alphabetically
    moves = [...moves].sort((a, b) => {
      const comparison = a.move.name.localeCompare(b.move.name)
      return sortOrder === 'asc' ? comparison : -comparison
    })

    return moves
  }, [pokemon?.moves, searchTerm, sortOrder])

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
  }

  return (
    <section className='poke-id__moves'>
      <div className="moves-controls">
        <input
          type="text"
          placeholder="Search moves..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="moves-search"
          aria-label="Search moves"
        />
        <button 
          onClick={toggleSort}
          className="moves-sort-btn"
          aria-label={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
        >
          Sort {sortOrder === 'asc' ? '↓' : '↑'}
        </button>
      </div>

      {filteredAndSortedMoves.length === 0 ? (
        <p className="no-moves">No moves found</p>
      ) : (
        <>
          <p className="moves-count">
            Showing {filteredAndSortedMoves.length} move{filteredAndSortedMoves.length !== 1 ? 's' : ''}
          </p>
          <ul className='poke-id__moves-container'>
            {filteredAndSortedMoves.map((move, index) => (
              <li 
                key={`${move.move.url}-${index}`} 
                className='poke-id__move'
              >
                {move.move.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default PokemonMoves