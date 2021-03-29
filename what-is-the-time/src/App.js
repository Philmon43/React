import React, { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = (e) => {
    const sec = parseInt(e.target.value);
    setSeconds(sec);
    setMinutes(sec / 60);
    setHours(sec / 360);
  };

  const handleMinutes = (e) => {
    const min = parseInt(e.target.value);
    setSeconds(min * 60);
    setMinutes(min);
    setHours(min / 60);
  };

  const handleHours = (e) => {
    const hour = parseInt(e.target.value);
    setSeconds(hour * 360);
    setMinutes(hour * 60);
    setHours(hour);
  };
  return(
    <>
    <div>
        Seconds: <input type="number" value={seconds} onChange={handleSeconds} />
    </div>
    <div>
        Minutes: <input type="number" value={minutes} onChange={handleMinutes} />
    </div>
    <div>
        Hours  :<input type="number" value={hours} onChange={handleHours} />
    </div>
    </>
  )
}

export default App;