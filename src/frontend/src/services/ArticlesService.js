import axios from "axios";
import { authHeader } from "./AuthService";

const ARTICLE_URL = "http://localhost:8080/api/v1/articles";
const COMMENT_URL = "http://localhost:8080/api/v1/comments";

const token = JSON.parse(localStorage.getItem("user"))?.token;
console.log(token);

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const getAllGames = () => {
  return axios.get(`${ARTICLE_URL}/game/articles`);
};

const getGamesById = (id) => {
  return axios.get(`${ARTICLE_URL}/games/${id}`);
};

const getGamesImagesById = (id) => {
  return axios.get(`${ARTICLE_URL}/games/images/${id}`);
};

const getTechImagesById = (id) => {
  return axios.get(`${ARTICLE_URL}/tech/images/${id}`);
};

const getAllTech = () => {
  return axios.get(`${ARTICLE_URL}/tech/articles`);
};

const getTechById = (id) => {
  return axios.get(`${ARTICLE_URL}/tech/${id}`);
};

const ArticlesService = {
  getAllGames,
  getGamesById,
  getAllTech,
  getTechById,
  getGamesImagesById,
  getTechImagesById,
};
export default ArticlesService;

const getTechComments = (id) => {
  return axios.get(`${COMMENT_URL}/get/tech/reviews/${id}`);
};
const getGameComments = (id) => {
  return axios.get(`${COMMENT_URL}/get/games/reviews/${id}`);
};
const createTechComment = (comment, parentId, techId, userId) => {
  return axios.post(
    `${COMMENT_URL}/tech/reviews`,
    {
      comment,
      parentId,
      techId,
      userId,
    },
    config
  );
};
const createGameComment = (comment, parentId, gamesId, userId) => {
  return axios.post(
    `${COMMENT_URL}/games/reviews`,
    {
      comment,
      parentId,
      gamesId,
      userId,
    },
    config
  );
};
const updateComment = () => {};
const deleteComment = () => {};

export const CommentsService = {
  getTechComments,
  getGameComments,
  createTechComment,
  createGameComment,
  updateComment,
  deleteComment,
};
