import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loading from "components/common/Loading/Loading";

const ResultField = (props: any) => {
  const { setKeyword, searchedData, status } = props;
  const navigate = useNavigate();

  const onHandleList = (product_id: any) => {
    navigate(`/productdetail/${product_id}`);
    setKeyword("");
  };

  const getDataByStatus = () => {
    switch (status) {
      case "loading":
        return <Loading className="search_result" />;
      case "error":
        return <></>;
      default:
        return (
          <ul>
            <header>추천 검색어</header>
            {searchedData?.map((item: any) => {
              return (
                <li
                  key={item.product_id}
                  onClick={() => onHandleList(item.product_id)}
                >
                  {item.product_name}
                </li>
              );
            })}
          </ul>
        );
    }
  };

  return searchedData ? (
    <Wrapper>
      <>{getDataByStatus()}</>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  top: 45px;
  background: #f2f2f2;
  border: 1px solid #c4c4c4;
  width: calc(100% - 30px);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  li {
    margin-bottom: 4px;
    :hover {
      background-color: f2f2f2;
      font-weight: bold;
    }
  }
  header {
    font-size: 12px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export default ResultField;
