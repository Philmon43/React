import React, {useState, useEffect} from "react";
import Axios from "./Axios";
const App = () => {
    const [jokes, setJokes ] = useState('');
    const [catagories, setCatagories ] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const getCatgories = async () => {
            const { data } = await Axios.get("/jokes/categories");
           setCatagories(data)
           setLoading(false)
        }
        getCatgories()
    }, []);

    const updateJoke = async (catagory) => {
        const { data } = await Axios.get(`/jokes/random?category=${catagory}`)
        setJokes(data.value)
    }

    return <div>{loading?<p>Loading</p>:catagories.map((catagory) => {
        return <button key={catagory} onClick={() => updateJoke(catagory)}>{catagory}</button>
    })}
    {jokes.length>0?<p>{jokes}</p>: ""}
    </div>
}
export default App