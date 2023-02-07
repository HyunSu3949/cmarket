import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemGrid = styled.section`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 70px;
  margin: 0 auto;
`;

export const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #767676;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #21bf48;
  }
`;
