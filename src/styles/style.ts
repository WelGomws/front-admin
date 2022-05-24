import styled from "styled-components";
import { TextField, Select } from "@mui/material";

export const Input = styled(TextField)({
  width: 360,
  margin: "20px 0 0 0",
  "& label.Mui-focused": {
    color: "#8257E5",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#8257E5",
    },
  },
});

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  background: #ebebf5;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  color: #001041;
  margin: 0 0 30px;
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 20px;
    font-size: 56px;
  }
`;

export const Button = styled.button`
  background: #04d361;
  font-size: 14px;
  border: 0;
  height: 40.5px;
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
