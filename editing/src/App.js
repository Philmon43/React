import React, { useState, useEffect, useRef} from "react";

const App = () => {
  const [inputType, setInputType] = useState("Edit");
  const inputref = useRef(null)

  useEffect(() => {
    if(inputType === "Save"){
      inputref.current.focus()
    }
  },[inputType]);
  return <div>
    {inputType==="Save"&&<input ref={inputref} type="text"/>}{<input type="button" value={inputType} onClick={() => setInputType((type) => type === "Edit"? "Save": "Edit")}/>}
  </div>
}

export default App;