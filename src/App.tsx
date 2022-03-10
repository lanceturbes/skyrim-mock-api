import React, { useState } from "react";
import HoldCard from "./components/HoldCard";
import { HoldInfo } from "./mocks/handlers";

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
        APIData.holds.map((hold: HoldInfo) => <HoldCard hold={hold} />)}
    </div>
  );
};

export default App;
