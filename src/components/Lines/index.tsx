import { Menu } from "../Menu";
import { Container, Input, Title } from "../../styles/style";
import SubwayIcon from "@mui/icons-material/Subway";
import { AddButton, CancelButton, ContainerButtons, TitleModal } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Line } from "./line";
import { Modal } from "../Modal";
import { parseCookies } from "nookies";
import { DotsLoading } from "../LoadingDots";

export const Lines = () => {
  const [lines, setLines] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const cookies = parseCookies();

  const getAllLines = async () => {
    try {
      const res = await api.get("/lines");
      setLines(res.data);
    } catch (error) {}
  };

  const createLine = async () => {
    try {
      setLoading(true);
      await api.post(
        "/lines",
        {
          name,
          color,
        },
        { headers: { authorization: cookies.accessToken } }
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setOpen(false);
    setName("");
    setColor("");
    getAllLines();
  };

  useEffect(() => {
    getAllLines();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Title>
          Sessão das Linhas <SubwayIcon />
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Adicione novas linhas.</span>
          <AddButton onClick={() => setOpen(true)}>Adicionar</AddButton>
        </div>
        {lines.map((line, index) => (
          <Line line={line} index={index} />
        ))}
      </Container>
      <Modal open={open} setOpen={setOpen}>
        <TitleModal>Adicione uma nova linha</TitleModal>
        <Input
          name="name"
          size="small"
          label="Nome"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onBlur={(event) => {
            setName(event.target.value);
          }}
        />
        <Input
          name="color"
          size="small"
          label="Cor"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
          onBlur={(event) => {
            setColor(event.target.value);
          }}
        />
        <ContainerButtons>
          <CancelButton onClick={() => setOpen(false)}>Cancelar</CancelButton>
          <AddButton onClick={() => createLine()}>
            {loading ? <DotsLoading /> : "Confirmar"}
          </AddButton>
        </ContainerButtons>
      </Modal>
    </>
  );
};
