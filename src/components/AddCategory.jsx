import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) =>{
       setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onNewCategory(inputValue.trim())
        // setCategories((categories) => [...categories, inputValue])
        setInputValue("")
        // console.log(event)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value = {inputValue}
            onChange = {(event)  => onInputChange(event)}
            />
        </form>
        
    )
}
