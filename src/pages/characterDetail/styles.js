import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  background: #222831;
  padding: 30px;
  height: 100vh;

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }

  .img-content {
    width: 600px;
    height: 700px;
    overflow: hidden;

    @media screen and (max-width: 970px) {
      width: 100%;
      overflow: initial;
      height: 600px;
    }

    img {
      width: 600px;
      height: auto;

      @media screen and (max-width: 970px) {
        width: 100%;
        overflow: visible;
        height: auto;
      }
    }
  }
`;

export const Button = styled.button`
  border: 4px solid #ccc;
  padding: 16px 24px;
  position: relative;
  background-color: transparent;
  display: block;
  color: #ccc;

  &:active {
    &:after {
      width: 100%;
      text-decoration: none;
    }
  }
`;

export const InputName = styled.input`
  background-color: transparent;
  padding: 15px 10px;
  margin: 15px 0;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: block;
  font-size: 20px;
  width: 80%;

  &:focus {
    background-color: #4f5a6b;
    height: 20px;
  }
`;

export const DescriptionName = styled.textarea`
  background-color: transparent;
  padding: 10px 10px;
  margin: 15px 0;
  border: 1px solid #4f5a6b;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: block;
  font-size: 14px;
  line-height: 22px;
  width: 80%;
  height: 100px;

  &:focus {
    background-color: #4f5a6b;
  }
`;

export const Content = styled.div`
    padding-left: 30px;

    @media screen and (max-width: 970px) {
        padding-top: 30px
    }

    .back-button {
        margin: 50px 0 80px 0;
    }
}`;

export const Series = styled.div`
  h1 {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 36px;
    line-height: 50px;
    margin: 0;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 14px;
    line-height: 22px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 26px;
    margin-top: 40px;
  }

  ul {
    display: block;
    margin-left: -10px;
  }

  ul li {
    font-family: "Roboto", sans-serif;
    display: block;
    position: relative;
    color: #fff;
  }

  ul li:not(:last-child) {
    margin-bottom: 16px;
  }

  ul li:before {
    content: "";
    position: absolute;
    top: 1.2em;
    left: -30px;
    margin-top: -0.9em;
    background: #343a44;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;
