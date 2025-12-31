import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  
  const submitHandler=(e)=>{
      e.preventDefault()
      setSearch("")
    dispatch(setQuery(search))
  }

  return (
    <div>
      <form 
      onSubmit={(e)=>{submitHandler(e)}}
      className="flex p-4 md:p-10 ">
        <input
          className="w-full border-2 px-3 md:px-4 py-2 text-lg md:text-xl rounded outline-none"
          type="text"
          placeholder="Search anythink..."
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="active:scale-95 cursor-pointer border-2 px-3 md:px-4 py-2 text-lg md:text-xl rounded outline-none ml-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
