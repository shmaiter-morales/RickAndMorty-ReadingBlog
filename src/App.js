import "./styles/app.css";
import React, { useEffect, useState } from "react";
import NavbarRickYMorty from "./components/navbar";
import SearchBar from "./components/searchBar";

function App() {
  const [data, setData] = useState({});

  const loadData = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        console.log(data.results);
        setData(data.results);
      } else {
        setData("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="app">
      <NavbarRickYMorty />
      <SearchBar data={data} />
    </div>
  );
}

export default App;
