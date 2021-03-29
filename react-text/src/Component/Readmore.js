import React , {useState} from "react";
import "./readmore.css";

const ReadMore = ({data}) => {
    const [readMore, setReadMore] = useState(false);
    const link = readMore? "Read Less": "Read More";
    const content = readMore? data.text: data.text.split("").splice(0, data.maxLength).join("")
    return <div className="text">{content}<span onClick={() => setReadMore(readMore?false:true)} className="link">{link}</span></div>
}

export default ReadMore;