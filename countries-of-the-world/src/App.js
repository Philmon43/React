import React, { useState, useEffect} from "react";
import Axios from "./Axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [val , setVal ] = useState("");
  const [list , setList] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const { data } = await Axios.get("/rest/v2/all");
      const countries = data.map((data) => data.name);
      setCountries(countries)
    }
    
    getAllCountries()
  }, []);

  useEffect(() => {
    if(val) {
      let filteredData = countries.filter((country) => {
        return country.toLowerCase().includes(val)
      });
      setList(filteredData);
    }else{
      setList(countries);
    }
  }, [val]);

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Countries"/>
      <ul>
        {list.map((lst) => {
          return <li key={lst}>{lst}</li>
        })}
      </ul>
    </div>
  )
}

export default App;