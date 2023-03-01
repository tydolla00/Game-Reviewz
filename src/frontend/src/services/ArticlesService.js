import http from "./http";

const getAll = () => {
  return http.get("/articles");
};

const ArticlesService = {
  getAll,
};
export default ArticlesService;
