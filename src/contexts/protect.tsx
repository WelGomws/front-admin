import { NextPageContext } from "next";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";
import { api } from "../services/api";

export async function getProtect(
  context: NextPageContext,
  extraProps?: Object
) {
  const cookies = parseCookies(context);

  const token = cookies.accessToken;

  const validationToken = async () => {
    try {
      const teste = await api.get(`/lines/authenticate`, {
        headers: {
          Authorization: token,
        },
      });
      return true;
    } catch (error) {
      console.log("Invalid token");
      return false;
    }
  };

  const validToken = await validationToken();
  if (!token || !validToken) {
    destroyCookie(null, "accessToken");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...extraProps,
    },
  };
}
