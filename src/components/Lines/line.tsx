import { formatDate } from "../../utils/formatDate";
import TrainIcon from "@mui/icons-material/Train";
import { Session, Titles } from "./style";

export const Line = ({ line, index }: any) => {
  return (
    <Session>
      <div>
        <Titles>Linha - {line.name}</Titles>
        <Titles>Adicionada em: {formatDate(line.updatedAt)}</Titles>
      </div>
      <div>
        <TrainIcon style={{ color: line.color, fontSize: 48 }} />
      </div>
    </Session>
  );
};
