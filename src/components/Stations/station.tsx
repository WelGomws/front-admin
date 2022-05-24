import { formatDate } from "../../utils/formatDate";
import TrainIcon from "@mui/icons-material/Train";
import EditIcon from "@mui/icons-material/Edit";
import {
  AddButton,
  ContainerSelectItens,
  Session,
  TitleModal,
  Titles,
} from "./style";
import IconButton from "@mui/material/IconButton";
import { Modal } from "../Modal";
import { useState } from "react";
import SelectItens from "react-select";
import { accessibilityItems } from "../../accessibilityItems";
import { DotsLoading } from "../LoadingDots";
import { api } from "../../services/api";
import { parseCookies } from "nookies";
export const Station = ({
  station,
  line,
  getAllLines,
  getAllStations,
}: any) => {
  const [open, setOpen] = useState(false);
  const [newItens, setNewItens] = useState([]);
  const [loading, setLoading] = useState(false);

  const cookies = parseCookies();

  const updateStation = async () => {
    try {
      setLoading(true);
      await api.patch(
        `/stations/${station._id}`,
        {
          itens: newItens.map((item: any) => item.value),
        },
        {
          headers: {
            authorization: cookies.accessToken,
          },
        }
      );
    } catch (error) {
      console.log("error in update station", error);
    }
    setLoading(false);
    setOpen(false);
    setNewItens([]);
    getAllLines();
    getAllStations();
  };

  const oldOptions = station.accessibilityItems.map((item: any) => ({
    label: item,
    value: item,
  }));

  return (
    <>
      <Session>
        <div>
          <Titles>Estação - {station.name}</Titles>
          <Titles>
            Linha: {line?.name}
            <TrainIcon style={{ color: line?.color }} />
          </Titles>
          <Titles>
            Itens de acessibilidade:
            {station.accessibilityItems.map((item: any) => (
              <span
                style={{
                  margin: "0 5px",
                  background: "#f264ac",
                  padding: "2px 5px",
                  borderRadius: 5,
                }}
              >
                {item}
              </span>
            ))}
          </Titles>
          <Titles>Adicionada em: {formatDate(station.updatedAt)}</Titles>
        </div>
        <div>
          <IconButton color="primary" onClick={() => setOpen(true)}>
            <EditIcon />
          </IconButton>
        </div>
      </Session>
      <Modal open={open} setOpen={setOpen}>
        <TitleModal>Editar estação {station.name}</TitleModal>
        <ContainerSelectItens>
          <p>Itens de acessibilidade da estação:</p>
          <SelectItens
            isMulti
            defaultValue={oldOptions}
            name="accessibilityItems"
            isSearchable={false}
            options={accessibilityItems}
            onChange={(event: any) => setNewItens(event)}
            placeholder="Selecione os itens de acessibilidade"
          />
        </ContainerSelectItens>
        <div style={{ alignSelf: "flex-end", margin: "20px 0 0" }}>
          <AddButton onClick={() => updateStation()}>
            {loading ? <DotsLoading /> : "Confirmar"}
          </AddButton>
        </div>
      </Modal>
    </>
  );
};
