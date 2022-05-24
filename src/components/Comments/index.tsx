import { Menu } from "../Menu";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Container, Icon, Session, SessionTitle } from "./style";
import { Collapse } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { CommentItem } from "./comment";
import CommentIcon from "@mui/icons-material/Comment";
import { Title } from "../../styles/style";

export const Comments = () => {
  const [newComments, setNewComments] = useState([]);
  const [aprovedComments, setAprovedsComments] = useState([]);
  const [declinedsComments, setDeclinedsComments] = useState([]);
  const [expanded, setExpanded] = useState<string | boolean>("");

  const handleChange = (session: string) => {
    setExpanded((prev) => {
      if (prev === session) {
        return false;
      }
      return session;
    });
  };

  const getAllComments = async () => {
    const res = await api.get("/comments");
    setNewComments(
      res.data.filter((comment: any) => comment.active && !comment.reviewed)
    );
    setAprovedsComments(
      res.data.filter((comment: any) => comment.active && comment.reviewed)
    );
    setDeclinedsComments(
      res.data.filter((comment: any) => comment.reviewed && !comment.active)
    );
    return;
  };

  useEffect(() => {
    getAllComments();
  }, [expanded]);

  return (
    <>
      <Menu />
      <Container>
        <Title>
          Sessão de comentários <CommentIcon />
        </Title>
        <p>Revise comentários novos, antigos e descartados.</p>
        <Session>
          <SessionTitle onClick={() => handleChange("news")}>
            <h3>Novos</h3>
            <Icon open={expanded === "news"}>
              <DoubleArrowRoundedIcon />
            </Icon>
          </SessionTitle>
          <Collapse in={expanded === "news"}>
            {newComments.length ? (
              newComments.map((comment, index) => (
                <CommentItem
                  key={index}
                  comment={comment}
                  view
                  setExpanded={setExpanded}
                />
              ))
            ) : (
              <p>Sem comentários novos!</p>
            )}
          </Collapse>
        </Session>
        <Session>
          <SessionTitle onClick={() => handleChange("aproved")}>
            <h3>Aprovados</h3>
            <Icon open={expanded === "aproved"}>
              <DoubleArrowRoundedIcon />
            </Icon>
          </SessionTitle>
          <Collapse in={expanded === "aproved"}>
            {aprovedComments.map((comment, index) => (
              <CommentItem
                key={index}
                comment={comment}
                setExpanded={setExpanded}
              />
            ))}
          </Collapse>
        </Session>
        <Session>
          <SessionTitle onClick={() => handleChange("descarted")}>
            <h3>Descartados</h3>
            <Icon open={expanded === "descarted"}>
              <DoubleArrowRoundedIcon />
            </Icon>
          </SessionTitle>
          <Collapse in={expanded === "descarted"}>
            {declinedsComments.map((comment, index) => (
              <CommentItem
                key={index}
                comment={comment}
                setExpanded={setExpanded}
              />
            ))}
          </Collapse>
        </Session>
      </Container>
    </>
  );
};
