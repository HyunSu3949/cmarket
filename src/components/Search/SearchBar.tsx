import React from "react";
import useSearch from "./useSearch";

export default function SearchBar() {
  const { onChange } = useSearch();
  return (
    <form>
      <input type="text" onChange={onChange} />
      <button>검색</button>
    </form>
  );
}
