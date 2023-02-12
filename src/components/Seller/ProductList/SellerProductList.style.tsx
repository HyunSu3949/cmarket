import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 884px;
  background: #f2f2f2;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow-x: hidden;
  padding-top: 60px;
`;

export const TitleList = styled.ul`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  font-size: 18px;
  line-height: 23px;
  width: 100%;
  height: 60px;
  background: white;
  font-weight: bold;
  > li {
    :first-child {
      margin: 0 auto;
    }
    :nth-child(2) {
      margin-right: 240px;
    }
    :nth-child(3) {
      margin-right: 106px;
    }
    :nth-child(4) {
      margin-right: 53px;
    }
  }
`;
