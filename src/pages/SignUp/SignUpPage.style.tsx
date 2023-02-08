import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  display: block;
  margin: 50px auto;
  width: 238px;
  height: 74px;
`;

export const Button = styled.button`
  position: relative;
  top: 18px;
  width: 275px;
  height: 80px;
  border: 1px solid #c4c4c4;
  border-radius: 10px 10px 0 0;
  border-bottom: none;
  background: #f2f2f2;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  box-sizing: border-box;
  padding-bottom: 18px;
  ${(props) =>
    props.name === props.id &&
    `
    background: #FFFFFF;
    z-index:10;
  `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  position: relative;
  ::before {
    content: "-";
    position: absolute;
    bottom: -21px;
    left: 260px;
    z-index: 20;

    color: white;
    width: 20px;
    height: 20px;
    background-color: white;
  }
`;
export const FormWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  width: fit-content;
`;
