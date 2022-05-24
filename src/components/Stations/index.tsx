import { Container, Input, Title } from "../../styles/style";
import { Menu } from "../Menu";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import {
  AddButton,
  CancelButton,
  ContainerButtons,
  ContainerSelectItens,
  TitleModal,
} from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import TrainIcon from "@mui/icons-material/Train";
import { Modal } from "../Modal";

import SelectItens from "react-select";
import { DotsLoading } from "../LoadingDots";
import { parseCookies } from "nookies";
import { Station } from "./station";
import { accessibilityItems } from "../../accessibilityItems";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Stations = () => {
  const [lines, setLines] = useState([]);
  const [lineWithStation, setLineWithStation] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectLine, setSelectLine] = useState("");
  const [station, setStation] = useState("");
  const [stations, setStations] = useState([]);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllLines = async () => {
    try {
      const res = await api.get("/lines");
      setLineWithStation(res.data);
      setLines(
        res.data.map((line: any) => ({
          value: line._id,
          label: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {line.name}
              <TrainIcon style={{ color: line.color, margin: "0 0 0 5px" }} />
            </div>
          ),
        }))
      );
    } catch (error) {}
  };

  const getAllStations = async () => {
    try {
      const res = await api.get("/stations");
      setStations(res.data);
    } catch (error) {
      console.log("error in loading stations", error);
    }
  };

  const cookies = parseCookies();

  const createStation = async () => {
    try {
      setLoading(true);
      await api.post(
        "/stations",
        {
          name: station,
          lineId: selectLine,
          accessibilityItems: itens.map((item: any) => item.value),
        },
        {
          headers: {
            authorization: cookies.accessToken,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setOpen(false);
    getAllLines();
    getAllStations();
  };

  useEffect(() => {
    setItens([]);
    setSelectLine("");
    setStation("");
  }, [open]);

  useEffect(() => {
    getAllLines();
    getAllStations();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Title>
          Sessão das Estações <TransferWithinAStationIcon />
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Adicione novas estações.</span>
          <AddButton onClick={() => setOpen(true)}>Adicionar</AddButton>
        </div>
        {stations.map((station: any, index: number) => (
          <Station
            key={index}
            station={station}
            line={lineWithStation.find(
              (line: any) => line._id === station.lineId
            )}
            getAllLines={getAllLines}
            getAllStations={getAllStations}
          />
        ))}
      </Container>
      <Modal open={open} setOpen={setOpen}>
        <TitleModal>Adicione uma nova estação</TitleModal>
        <Input
          name="station"
          size="small"
          label="Nome"
          value={station}
          onChange={(event) => {
            setStation(event.target.value);
          }}
          onBlur={(event) => {
            setStation(event.target.value);
          }}
        />
        <ContainerSelectItens>
          <p>A estação pertence a linha:</p>
          <SelectItens
            name="line"
            isSearchable={false}
            options={lines}
            onChange={(event: any) => setSelectLine(event.value)}
            placeholder="Selecione a linha referente a estação"
          />
          <p>Itens de acessibilidade da estação:</p>
          <SelectItens
            isMulti
            name="accessibilityItems"
            isSearchable={false}
            options={accessibilityItems}
            onChange={(event: any) => setItens(event)}
            placeholder="Selecione os itens de acessibilidade"
          />
        </ContainerSelectItens>
        <ContainerButtons>
          <CancelButton onClick={() => setOpen(false)}>Cancelar</CancelButton>
          <AddButton onClick={() => createStation()}>
            {loading ? <DotsLoading /> : "Confirmar"}
          </AddButton>
        </ContainerButtons>
      </Modal>
    </>
  );
};
