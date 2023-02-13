import { ReactElement } from "react";
import { useIsFetching, useIsMutating } from "react-query";
import styled from "styled-components";
import spinner from "assets/images/spinner.gif";

export default function Loading(): ReactElement {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <Div
      style={{
        display: `${display}`,
      }}
    >
      <img src={spinner} alt="로딩스피너" />
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  top: 90px;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 90px);
`;
