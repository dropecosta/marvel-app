import styled from "styled-components";

export const Container = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      width: 30px;
      height: 20px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      font-size: 25px;
      border: none;
      background-color: #000;
      padding: 10px;
      margin: 0 2px;
      cursor: pointer;

      &:active {
        background-color: #4f5a6b;

        a {
          color: white;
          font-family: "Roboto", sans-serif;
          &:hover,
          &:active {
            color: #fff;
          }
        }
      }

      a {
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        color: #ccc;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .footer {
    margin: 0;
    padding-bottom: 40px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 30px auto;

  @media screen and (max-width: 970px) {
    width: 80%;
}

  .searchTerm {
    width: 100%;
    border: 3px solid #4f5a6b;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #fff;

    background: #000;
  }

  .searchTerm:focus {
    color: #fff;
  }

  .searchButton {
    border: 1px solid #4f5a6b;
    background: #4f5a6b;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 14px;
    padding: 9px 20px;
    font-family: "Roboto", sans-serif;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  background: #222831;
  padding: 30px;
`;
