import React, { useState, useEffect} from "react";
import Axios from "./Axios";

const App = () => {
  const [val , setVal ] = useState("");
  const [query, setQuiry] = useState("hooks");
  const [result, setResult ] =  useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get(`/api/v1/search?query=${query}`);
      setResult(data.hits)
    }
    search()
  }, [query]);

  
  useEffect(() => {
    setLoading(false)
  }, [result]);



  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} placeholder={query}/>
      <button onClick={() => val !==""&&setQuiry(val)}>Search</button>
      {loading?<p>loading ...</p>:
      <ul>
        {result.map((lst) => {
          return <li key={lst.objectID}><a href={lst.url} >{lst.title}</a></li>
        })}  
      </ul>
      }
    </div>
  )
}

export default App;