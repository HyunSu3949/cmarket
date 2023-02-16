import * as S from "./SearchBarStyle";
import ResultField from "components/Search/ResultField/ResultField";
import useSearch from "./../hooks/useSearch";

export default function SearchBar() {
  const {
    onChangeInput,
    onBlurInput,
    onSubmit,
    searchedData,
    status,
    keyword,
    setKeyword,
  } = useSearch();

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          type="text"
          onChange={onChangeInput}
          onBlur={onBlurInput}
          value={keyword}
        />
        <S.Button type="submit">
          <span className="ir">검색</span>
        </S.Button>
      </S.Form>
      <ResultField
        searchedData={searchedData}
        status={status}
        setKeyword={setKeyword}
      />
    </S.Wrapper>
  );
}
