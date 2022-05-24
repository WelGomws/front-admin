import styled from "styled-components";

export const Container = styled.div`
  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  span {
    display: inline-block;
    vertical-align: middle;
    width: 0.6em;
    height: 0.6em;
    margin: 0.19em;
    background: #8257e5;
    border-radius: 0.6em;
    animation: loading 1s infinite alternate;
  }

  span:nth-of-type(2) {
    background: #8257e5;
    animation-delay: 0.2s;
  }
  span:nth-of-type(3) {
    background: #8257e5;
    animation-delay: 0.4s;
  }
  span:nth-of-type(4) {
    background: #8257e5;
    animation-delay: 0.6s;
  }
  span:nth-of-type(5) {
    background: #8257e5;
    animation-delay: 0.8s;
  }
`;
