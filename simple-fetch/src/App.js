import React, { useState, useEffect} from "react";
import Axios from "./Axios";

const App = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await Axios.get("/films/1/");
      setMovie(data)
    }
    getMovie()
  }, []);
  return (
    <div>
      <h1> Title: {movie.title}</h1>
      <h2> Director: {movie.director}</h2>
    </div>
  )
}

export default App;