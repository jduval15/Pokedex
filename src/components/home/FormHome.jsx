import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const trimmedName = name.trim()
        
        if (!trimmedName) {
            setError('Please enter your name')
            return
        }
        
        if (trimmedName.length < 2) {
            setError('Name must be at least 2 characters')
            return
        }

        dispatch(setUserNameGlobal(trimmedName))
        navigate("/pokedex")
    }

    const handleChange = e => {
        setName(e.target.value)
        if (error) setError('')
    }

    return (
        <form onSubmit={handleSubmit} className="pokedex__form">
            <div className="form-group">
                <input 
                    className='pokedex__input' 
                    type="text" 
                    placeholder='Type your name'
                    value={name}
                    onChange={handleChange}
                    aria-label="Trainer name"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? 'name-error' : undefined}
                />
                {error && <span id="name-error" className="error-message">{error}</span>}
            </div>
            <button className='pokedex__btn' type="submit">Catch them all!</button>
        </form>
    )
}

export default FormHome