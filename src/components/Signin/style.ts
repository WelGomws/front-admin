import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ebebf5;
`;

export const Title = styled.h1`
  font-size: 24px;
  width: 500px;
  text-align: center;
  color: #000;
  margin: 0 0 30px;
`;

export const Button = styled.button`
  background: #04d361;
  font-size: 14px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  padding: 12px 14px;
  margin: 30px 0 0;
  cursor: pointer;

  &:hover {
    background: #24ef7f;
  }
`;
