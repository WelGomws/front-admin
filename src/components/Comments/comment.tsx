import { useState } from "react";
import { parseCookies } from "nookies";
import {
  AproveButton,
  Author,
  ContainerItem,
  CreatedAt,
  DeclineButton,
  Infos,
} from "./style";
import { api } from "../../services/api";
import { DotsLoading } from "../LoadingDots";
import { formatDate } from "../../utils/formatDate";

export const CommentItem = ({ comment, view, setExpanded }: any) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<string | boolean>("");

  const cookies = parseCookies();

  const submitReview = async (active: boolean, reviewed: boolean) => {
    try {
      setLoading(() => {
        if (active) {
          return "aproved";
        }
        return "discarted";
      });
      await api.patch(
        `/comments/${comment._id}`,
        {
          active,
          reviewed,
        },
        {
          headers: {
            authorization: cookies.accessToken,
          },
        }
      );
      setOpen(false);
    } catch (error) {
      console.log(error, "erro ao atualizar comentário");
    }
    setLoading(false);
    setExpanded(false);
  };

  return (
    <ContainerItem>
      <Infos>
        <Author>Autor: {comment.author}</Author>
        <CreatedAt>Comentário: {comment.comment}</CreatedAt>
        <CreatedAt>Criado em: {formatDate(comment.createdAt)}</CreatedAt>
      </Infos>
      {view && (
        <div style={{ display: "flex" }}>
          <AproveButton onClick={() => submitReview(true, true)}>
            {loading === "aproved" ? <DotsLoading /> : "Aprovar"}
          </AproveButton>
          <DeclineButton onClick={() => submitReview(false, true)}>
            {loading === "discarted" ? <DotsLoading /> : "Recusar"}
          </DeclineButton>
        </div>
      )}
    </ContainerItem>
  );
};
