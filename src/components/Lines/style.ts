import styled from "styled-components";
import { Button } from "../../styles/style";

export const Session = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f8f8fc;
  border-radius: 11px;
  border: 1px solid #ccc;
  margin: 20px 0 10px;
  padding: 20px;
`;

export const Titles = styled.h2<{ color?: string }>`
  color: ${({ color }) => color};
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 0 10px;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const AddButton = styled(Button)`
  margin: 0;
`;

export const TitleModal = styled.h1`
  font-size: 22px;
  
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0;
  align-self: flex-end;
`;

export const CancelButton = styled(Button)`
  background: #e33d3d;
  margin: 0 15px 0 0;

  &:hover {
    background: #eb5252;
  }
`;
