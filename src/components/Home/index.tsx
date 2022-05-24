import { Container, Title } from "../../styles/style";
import { Menu } from "../Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Session, Titles } from "../Stations/style";

export const HomePage = () => {
  const [linesWithStations, setLinesWithStations] = useState([]);

  const getAll = async () => {
    try {
      const res = await api.get("/lines/with-stations");
      setLinesWithStations(res.data);
    } catch (error) {
      console.log("error in get lines with stations", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Title>
          Página Inicial <HomeIcon />
        </Title>
        <div>
          <span>Listagem das Linhas e estações.</span>
        </div>
        {linesWithStations.map((item: any, index: number) => (
          <Session key={index}>
            <div>
              <Titles>Linha - {item.name}</Titles>
              <Titles>
                Estações:
                {item.stations.map((station: any, i: number) => (
                  <span
                    key={i}
                    style={{
                      margin: "0 5px",
                      background: "#03D361",
                      padding: "2px 5px",
                      borderRadius: 5,
                    }}
                  >
                    {station.name}
                  </span>
                ))}
              </Titles>
            </div>
          </Session>
        ))}
      </Container>
    </>
  );
};
