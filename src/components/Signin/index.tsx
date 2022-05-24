import { useState, useContext, useCallback } from "react";
import TextField from "@mui/material/TextField";
import * as S from "./style";
import { AuthContext } from "../../contexts/auth";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

import { Form, Input } from "../../styles/style";
import { DotsLoading } from "../LoadingDots";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const login = async (token: string, user: string): Promise<any> => {
    setCookie(null, "accessToken", token);
    setCookie(null, "user", user);

    return Promise.resolve(true);
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();
      setLoading(true);
      const res = await signIn({
        email,
        password,
      });
      login(res.token, res.user.name);
      router.push("/");
    } catch (error) {
      console.log(error, "error no login");
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <S.Title style={{ color: "#8257E5", fontSize: 56 }}>
        Seja bem vindo!
      </S.Title>
      <S.Title>
        Entre com seu email e senha para acessar o portal de administrador.
      </S.Title>
      <Form onSubmit={(event) => onSubmit(event)}>
        <Input
          name="email"
          size="small"
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onBlur={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          name="password"
          size="small"
          label="Senha"
          value={password}
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          onBlur={(event) => {
            setPassword(event.target.value);
          }}
        />
        <S.Button onClick={(event) => onSubmit(event)} type="submit">
          {loading ? <DotsLoading /> : "Acessar"}
        </S.Button>
      </Form>
    </S.Container>
  );
};
