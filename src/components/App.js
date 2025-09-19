import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setInterval only once when component mounts
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <p>You've been on this page for {count} seconds.</p>
    </div>
  );
};

export default App;
