import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css"

const App = () => {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getUser = async () => {
      const {data } = await axios.get("https://randomuser.me/api", {
        cancelToken: source.token
      });
      setUser(data.results[0])
    }
    if(toggle){
      getUser()
    }

    return () => {
        source.cancel()
        setUser(null)
    }
  }, [toggle]);
  return<div>
    <div className="toggle-container">
        <input
         type="checkbox" 
         checked={toggle} value={toggle} 
         onChange={(e) => setToggle(e.target.checked)} 
         />
        <div className="slider round"></div>
    </div>
    <p></p>
    {user&&user.name.first}
  </div>
}

export default App
