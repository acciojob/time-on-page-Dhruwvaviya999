
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  cont [ count, setCount ] = useState(0)
  const interval = setInterval(() => {
    count++;
  }, 1000)
 
  return (
    <div>
        {/* Do not remove the main div */}
        You have been on this page for {count}
    </div>
  )
}

export default App
