import styled, { css } from "styled-components";
import { Modal } from "@mui/material";
import { Button } from "../../styles/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  background: #ebebf5;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  color: #8257e5;
  margin: 0 0 30px;
`;

export const Session = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8fc;
  border-radius: 11px;
  border: 1px solid #ccc;
  margin: 20px 0 10px;

  p {
    padding: 0 20px 10px;
    color: #e33d3d;
  }
`;

export const SessionTitle = styled.div`
  padding: 20px;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  color: #32264d;
  & > h3 {
    font-size: 20px;
  }
`;

export const Icon = styled.div<{ open: boolean }>`
  transform: ${({ open }) => (open ? "rotate(270deg)" : "rotate(90deg)")};
  transition: all 0.2s ease;
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 0;
  border-radius: 11px;
  background: #e6e6f0;
  margin: 5px 20px;
  box-sizing: border-box;
  &:first-child {
    margin: 15px 20px 5px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Author = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 0 10px;
`;

export const CreatedAt = styled.h2`
  margin: 0 0 10px;
  font-size: 14px;
`;

export const AproveButton = styled(Button)`
  margin: 0 10px 0 0;
`;

export const DeclineButton = styled(Button)`
  background: #e33d3d;
  margin: 0;

  &:hover {
    background: #eb5252;
  }
`;
