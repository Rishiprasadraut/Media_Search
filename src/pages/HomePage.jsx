import React from "react";
import ResultGrid from "../components/ResultGrid.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Tabs from "../components/Tabs.jsx";
import { useSelector } from "react-redux";


const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="px-2 sm:px-0">
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
