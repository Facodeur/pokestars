import http from "./http-common";

const getAll = () => {
  return http.get("/pokemon");
};

const getByName = name => {
  return http.get(`/pokemon/${name}`)
}

export default {getAll, getByName};
