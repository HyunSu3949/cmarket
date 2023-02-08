import styled from "styled-components";

type Props = {
  passed?: boolean;
};
export const ServerMsg = styled.span`
  color: red;
  ${(props: Props) =>
    props.passed &&
    `
      color: #21BF48;
  `}
`;
