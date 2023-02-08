import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 100px auto;
`;

export const Img = styled.img`
  display: block;
  width: 238px;
  height: 74px;
  margin: 0 auto;
  margin-bottom: 70px;
`;

export const LinkWrapper = styled.div`
  margin: 30px auto;
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  a:first-child {
    ::after {
      content: "|";
      font-size: 16px;
      line-height: 20px;
      margin: 0 16px;
    }
  }
`;
