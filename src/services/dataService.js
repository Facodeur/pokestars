import http from "./http-common";

const getAll = () => {
  return http.get("/pokemon");
};

const getByName = name => {
  return http.get(`/pokemon/${name}`)
}
// eslint-disable-next-line
export default {getAll, getByName};
