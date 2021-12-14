import styled from "styled-components";

export const Card = styled.div`
  flex: 0 1 24%;

  .img-content {
      width: 400px;
      height: 400px;
      overflow: hidden;
      background: #000;

      @media screen and (max-width: 440px) {
          width: 100%;
      }

      img {
          width: 400px;
          cursor: pointer;

          @media screen and (max-width: 440px) {
              width: 600px;
          }
      }
  }

  .card-body{
      padding: 10px 0 20px 0;

      .card-name {
          color: #FFF;
          font-family: 'Roboto', sans-serif;
          text-transform: uppercase;
          font-weight: bold;
      }
  }
}
`