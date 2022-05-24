import styled, { css } from "styled-components";
import { Modal } from "@mui/material";

export const MyModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(205, 205, 205, 0.7);

  & > .MuiBackdrop-root {
    background: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  min-height: 100px;
  background: #fff;
  border-radius: 11px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  &:focus-visible {
    outline: none;
  }
`;
