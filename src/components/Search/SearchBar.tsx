import React from "react";
import useSearch from "./useSearch";
import * as S from "./SearchBarStyle";

export default function SearchBar() {
  const { onChange } = useSearch();
  return (
    <S.Form>
      <S.Input type="text" onChange={onChange} />
      <S.Button>
        <span className="ir">검색</span>
      </S.Button>
    </S.Form>
  );
}
