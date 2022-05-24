import { useRouter } from "next/router";
import * as S from "./style";

export const Menu = () => {
  const router = useRouter();
  return (
    <S.Container>
      <S.ContainerMenu>
        <S.List>
          <S.Item
            onClick={() => {
              router.push("/");
            }}
          >
            <a>Página Inicial</a>
          </S.Item>
          <S.Item
            onClick={() => {
              router.push("/lines");
            }}
          >
            <a>Linhas</a>
          </S.Item>
          <S.Item
            onClick={() => {
              router.push("/stations");
            }}
          >
            <a>Estações</a>
          </S.Item>
          <S.Item
            onClick={() => {
              router.push("/comments");
            }}
          >
            <a>Comentários</a>
          </S.Item>
        </S.List>
      </S.ContainerMenu>
    </S.Container>
  );
};
