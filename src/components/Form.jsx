import { useState } from "react"

const Form = (props)=> { 

    const [formState, setFormState] = 
        useState({
            searchTerm: ""
        })
    const handleChange = (event) => {                          
        //make a new copy of current State
        const newState = {...formState}
        //update the copy
        newState[event.target.name] = event.target.value
        //set the state to new state
        setFormState(newState)
    }

    const handleSubmit = (event) => {
        // prevent refresh
        event.preventDefault()
        // pass searchTerm to getMovie
        props.getMovie(formState.searchTerm)
        // reset form
        setFormState({
            searchTerm: ""
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchTerm" value={formState.searchTerm} 
                onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form