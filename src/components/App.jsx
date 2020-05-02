import React, {useState} from "react";

function App() {
  const [time, setTime] = useState('');
  function getTime(){
    setTime(new Date().toLocaleTimeString());
    //setInterval(getTime,1000);  //uncomment to make time update every second
  }

  return (
    <div className="container">
      <h1>{time||"TIME"}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
