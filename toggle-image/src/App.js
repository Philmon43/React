import React, { useEffect, useRef, useState } from "react";
import "./app.css";

const App =  () => {
  const imgRef = useRef(null);
  const imgReftwo = useRef(null);
  const [element, setElement ] = useState(null)

  useEffect(() => {
   if(element){
      element.current.classList.add("img")
   }

   return() => {
     if(element){
      element.current.classList.remove("img")
     }
   }
  }, [element]);

  return <div>
    <img ref={imgRef} onMouseEnter={() => setElement(imgRef)} src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="car-one"/>
    <img ref={imgReftwo} onMouseEnter={() => setElement(imgReftwo)} src="https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="car-two"/>
  </div>
}
export default App
