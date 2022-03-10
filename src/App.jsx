import React, { useState } from "react";

const App = () => {
  const [holds, setHolds] = useState([]);

  const handleGetHolds = async () => {
    fetch("/api/holds", { method: "GET" })
      .then((res) => res.json())
      .then(setHolds);
  };

  return (
    <div>
      <h1>Skyrim API</h1>

      <button onClick={handleGetHolds}>Get Holds</button>

      {holds &&
        holds.map((hold) => {
          return (
            <div>
              <h3>{hold.name}</h3>
              <p>Capital: {hold.capital}</p>
              <p>Jarl: {hold.jarl}</p>
              <p>Allegiance: {hold.allegiance}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
