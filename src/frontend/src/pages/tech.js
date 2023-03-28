import Games from "./games";
import { useState, useEffect } from "react";
import ArticlesService from "../services/ArticlesService";

export default function Tech() {
  const [articles, setArticles] = useState([]);
  const retrieveArticles = () => {
    ArticlesService.getAllTech()
      .then((response) => {
        setArticles(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveArticles();
  }, []);

  return (
    <>
      <Games articles={articles} page="Tech" />
    </>
  );
}
