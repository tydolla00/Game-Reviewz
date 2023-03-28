import axios from "axios";
import http from "./http";

// const http = () =>
//   axios.create({
//     baseURL: "http://localhost:8080/api/v1",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });

const getAllGames = () => {
  return http.get("/game/articles");
};

const getGamesById = (id) => {
  return http.get(`/games/${id}`);
};

const getAllTech = () => {
  return http.get("/tech/articles");
};

const getTechById = (id) => {
  return http.get(`/tech/${id}`);
};

const ArticlesService = {
  getAllGames,
  getGamesById,
  getAllTech,
  getTechById,
};
export default ArticlesService;
