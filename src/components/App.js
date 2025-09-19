
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [ count, setCount ] = useState(0)
  const interval = setInterval(() => {
    count++;
  }, 1000)
 
  return (
    <div>
        {/* Do not remove the main div */}
        You've been on this page for {count} seconds.
    </div>
  )
}

export default App
