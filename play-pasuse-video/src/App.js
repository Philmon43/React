import React, {useRef} from "react";

const App  = () => {
  const videoRef = useRef(null)
  return <div>
    <video ref={videoRef} width="auto" height="auto">
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
    </video>
    <button onClick={() => videoRef.current.play()}>Play</button>
    <button onClick={() => videoRef.current.pause()}>Pause</button>
  </div>
}

export default App;