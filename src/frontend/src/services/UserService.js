import axios from "axios";
import { authHeader } from "./AuthService";

const API_URL = "http://localhost:8080/api/v1/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userInfo = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return user;
};

const addForm = (data) => {
  return axios.post(API_URL + "contact/contactform", data);
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  userInfo,
  addForm,
};

export default UserService;
