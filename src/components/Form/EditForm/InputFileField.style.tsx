import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const Input = styled.input`
  display: none;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 454px;
  height: 454px;
  background: #c4c4c4;
  cursor: pointer;
`;
export const CurrentImg = styled.img`
  position: absolute;
  top: 0;
  width: 454px;
  height: 454px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  ${(props) =>
    props.src === "" &&
    `
    display:none
  `}
`;
