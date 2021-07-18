import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="">Meme Generator</h1>
    </div>
  );
}

export default App;
