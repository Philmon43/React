import axios from "axios";

export default axios.create({
    baseURL: "https://hn.algolia.com/",
})