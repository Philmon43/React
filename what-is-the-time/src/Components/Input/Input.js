import React, {useState} from "react"
import  "./input.css"
const Input = (props) => {
    const [input, setInput] = useState(0);

    const handleChange = (e) => {
        setInput(e.target.value)
        props.onChangeValue(e.target.value)
    }

    return <input type="number" value={input} onChange={(e) => handleChange(e)} />
}

export default Input