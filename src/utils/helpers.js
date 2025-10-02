// src/utils/helpers.js

/**
 * Formatea el nombre de un Pokémon
 * @param {string} name - Nombre del Pokémon
 * @returns {string} - Nombre capitalizado
 */
export const formatPokemonName = (name) => {
  if (!name) return ''
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Convierte decímetros a metros
 * @param {number} decimeters - Altura en decímetros
 * @returns {string} - Altura en metros formateada
 */
export const formatHeight = (decimeters) => {
  return `${(decimeters / 10).toFixed(1)} m`
}

/**
 * Convierte hectogramos a kilogramos
 * @param {number} hectograms - Peso en hectogramos
 * @returns {string} - Peso en kilogramos formateado
 */
export const formatWeight = (hectograms) => {
  return `${(hectograms / 10).toFixed(1)} kg`
}

/**
 * Obtiene el ID de un Pokémon desde su URL
 * @param {string} url - URL del Pokémon
 * @returns {number} - ID del Pokémon
 */
export const getPokemonIdFromUrl = (url) => {
  const parts = url.split('/')
  return parseInt(parts[parts.length - 2])
}

/**
 * Formatea el nombre de una estadística
 * @param {string} statName - Nombre de la estadística
 * @returns {string} - Nombre formateado
 */
export const formatStatName = (statName) => {
  const statNames = {
    'hp': 'HP',
    'attack': 'ATK',
    'defense': 'DEF',
    'special-attack': 'SP.ATK',
    'special-defense': 'SP.DEF',
    'speed': 'SPD'
  }
  return statNames[statName] || statName.toUpperCase()
}

/**
 * Valida si un string es un número
 * @param {string} str - String a validar
 * @returns {boolean} - true si es número
 */
export const isNumeric = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str))
}

/**
 * Debounce function
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} - Función con debounce
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Obtiene el color según el tipo de Pokémon
 * @param {string} type - Tipo del Pokémon
 * @returns {string} - Color hexadecimal
 */
export const getTypeColor = (type) => {
  const colors = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#6390F0',
    bug: '#A6B91A',
    normal: '#A8A77A',
    poison: '#A33EA1',
    electric: '#F7D02C',
    ground: '#E2BF65',
    fairy: '#D685AD',
    fighting: '#C22E28',
    psychic: '#F95587',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    flying: '#A98FF3'
  }
  return colors[type] || '#A8A77A'
}

/**
 * Trunca un texto a una longitud específica
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Ordena un array de Pokémon por diferentes criterios
 * @param {Array} pokemons - Array de Pokémon
 * @param {string} sortBy - Criterio de ordenamiento
 * @returns {Array} - Array ordenado
 */
export const sortPokemons = (pokemons, sortBy = 'id') => {
  if (!pokemons) return []
  
  const sorted = [...pokemons]
  
  switch (sortBy) {
    case 'id':
      return sorted.sort((a, b) => a.id - b.id)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'height':
      return sorted.sort((a, b) => b.height - a.height)
    case 'weight':
      return sorted.sort((a, b) => b.weight - a.weight)
    default:
      return sorted
  }
}

/**
 * Filtra Pokémon por búsqueda
 * @param {Array} pokemons - Array de Pokémon
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} - Array filtrado
 */
export const filterPokemons = (pokemons, searchTerm) => {
  if (!searchTerm) return pokemons
  
  const term = searchTerm.toLowerCase().trim()
  
  return pokemons.filter(pokemon => {
    const name = pokemon.name.toLowerCase()
    const id = pokemon.id.toString()
    return name.includes(term) || id.includes(term)
  })
}

/**
 * Genera un rango de números
 * @param {number} start - Número inicial
 * @param {number} end - Número final
 * @returns {Array} - Array de números
 */
export const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

/**
 * Calcula el porcentaje de una estadística
 * @param {number} value - Valor de la estadística
 * @param {number} max - Valor máximo (default: 255)
 * @returns {number} - Porcentaje
 */
export const calculateStatPercentage = (value, max = 255) => {
  return Math.round((value / max) * 100)
}

/**
 * Agrupa items por una propiedad
 * @param {Array} items - Array de items
 * @param {string} key - Propiedad para agrupar
 * @returns {Object} - Objeto agrupado
 */
export const groupBy = (items, key) => {
  return items.reduce((result, item) => {
    const group = item[key]
    if (!result[group]) {
      result[group] = []
    }
    result[group].push(item)
    return result
  }, {})
}

/**
 * Capitaliza la primera letra de un string
 * @param {string} str - String a capitalizar
 * @returns {string} - String capitalizado
 */
export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Verifica si es un ID válido de Pokémon
 * @param {string|number} id - ID a validar
 * @returns {boolean} - true si es válido
 */
export const isValidPokemonId = (id) => {
  const numId = parseInt(id)
  return !isNaN(numId) && numId > 0 && numId <= 1025
}

/**
 * Formatea un número con separador de miles
 * @param {number} num - Número a formatear
 * @returns {string} - Número formateado
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Obtiene una descripción aleatoria para Pokémon
 * @param {string} type - Tipo de Pokémon
 * @returns {string} - Descripción
 */
export const getRandomDescription = (type) => {
  const descriptions = {
    fire: ['Burns with passion!', 'Hot-headed fighter!', 'Flame master!'],
    water: ['Flows like water!', 'Ocean warrior!', 'Tidal force!'],
    grass: ['Nature lover!', 'Forest guardian!', 'Green power!'],
    electric: ['Shocking power!', 'Lightning fast!', 'Electric wonder!']
  }
  
  const typeDescriptions = descriptions[type] || ['Amazing Pokémon!']
  return typeDescriptions[Math.floor(Math.random() * typeDescriptions.length)]
}

/**
 * Convierte RGB a Hexadecimal
 * @param {number} r - Red
 * @param {number} g - Green
 * @param {number} b - Blue
 * @returns {string} - Color en hexadecimal
 */
export const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

/**
 * Verifica si un elemento está en viewport
 * @param {HTMLElement} element - Elemento a verificar
 * @returns {boolean} - true si está visible
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export default {
  formatPokemonName,
  formatHeight,
  formatWeight,
  getPokemonIdFromUrl,
  formatStatName,
  isNumeric,
  debounce,
  getTypeColor,
  truncateText,
  sortPokemons,
  filterPokemons,
  range,
  calculateStatPercentage,
  groupBy,
  capitalize,
  isValidPokemonId,
  formatNumber,
  getRandomDescription,
  rgbToHex,
  isInViewport
}