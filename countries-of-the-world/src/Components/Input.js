import React ,{ useState } from "react";

const Input = () => {
    const [val, setVal ] = useState("");


    const handleChange = (e) => {
        setVal(e.target.value)
    }

    return <input type="text" value={val} onChange = {handleChange} />
}

export default Input;