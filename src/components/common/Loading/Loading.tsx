import { useIsFetching, useIsMutating } from "react-query";
import styled from "styled-components";
import spinner from "assets/images/spinner.gif";

type Props = {
  className?: string;
};
export default function Loading({ className }: Props) {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <Div
      style={{
        display: `${display}`,
      }}
      className={className}
    >
      <img src={spinner} alt="로딩스피너" />
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  top: 90px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 90px);

  ${(props) =>
    props.className === "form" &&
    `  position: static;
      width:fit-content;
      height:fit-content;
    `}
  ${(props) =>
    props.className === "search_result" &&
    ` 
    position: static;
      width:fit-content;
      height:fit-content;
    `}
`;
