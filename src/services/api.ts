import axios from "axios";

export const api = axios.create({
  baseURL: "https://trab-fmu.herokuapp.com/api",
});
