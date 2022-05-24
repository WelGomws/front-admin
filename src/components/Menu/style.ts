import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContainerMenu = styled.div`
  display: flex;
  background: #dedede;
  align-self: center;
  width: 100%;
  justify-self: center;
  height: 40px;
  border-radius: 0 0 11px 11px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  font-size: 18px;
  color: #0d0d0d;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 11px 11px;

  :hover {
    background: #001041;
    color: #fff;
  }
`;
