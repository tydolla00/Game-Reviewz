import axios from "axios";
// import http from "./http";

const http = () =>
  axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      "Content-type": "application/json",
    },
  });

const getAll = () => {
  return http.get("/articles");
};

const ArticlesService = {
  getAll,
};
export default ArticlesService;
