import React, { useState } from "react";

const initialData = {
  holds: [],
};

const App = () => {
  const [APIData, setAPIData] = useState(initialData);

  const handleFetchHolds = async () => {
    fetch("/api/holds", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setAPIData({ ...APIData, holds: data }));
  };

  const handleReset = (data: string) => {
    setAPIData({ ...APIData, [data]: [] });
  };

  return (
    <div>
      <h1>Skyrim API</h1>

      <h2>Holds</h2>

      <button onClick={handleFetchHolds}>Fetch "Hold" Data</button>
      <button onClick={() => handleReset("holds")}>Reset</button>

      {APIData.holds &&
        APIData.holds.map(
          (hold: {
            name: string;
            capital: string;
            jarl: string;
            allegiance: string;
          }) => {
            return (
              <div>
                <h3>{hold.name}</h3>
                <p>Capital: {hold.capital}</p>
                <p>Jarl: {hold.jarl}</p>
                <p>Allegiance: {hold.allegiance}</p>
              </div>
            );
          }
        )}
    </div>
  );
};

export default App;
