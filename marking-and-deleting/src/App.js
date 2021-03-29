import React, { useState } from "react";
const converted = ["one", "two", "three", "four", "five"].map((item) => {
  return {
    name: item,
    checked: false
  }
})

const App = () => {

  const [items , setItems] = useState(converted)

  const change = (e, idx) => {
     const temp = [...items]
     temp[idx].checked = e.target.checked
     setItems(temp)
  }
  const handledelete = () => {
    const temp = items.filter((item) => {
      return !item.checked
    })
    setItems(temp)
  }

  const list =  items.map((item, idx) => {
    return <li key={item.name}><input name={item.name} onChange={(e) => change(e ,idx)} type="checkbox" /> {item.name}  </li>
  });


  return <div>
    <button onClick={handledelete}>Delete</button> <button onClick={() => setItems(converted)}>Reset</button>
          <ul>
          {list}
        </ul>
    </div>
}

export default App;
