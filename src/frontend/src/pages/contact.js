import { useEffect, useState } from "react";
import ArticlesService from "../services/ArticlesService";

const Contact = () => {
  // API will return array of objects so initialize state as an array.
  const [articles, setArticles] = useState([]);

  // useEffect is called whenever the page is rendered/rerendered. [] on Line 12 allows for API to only be called once.
  useEffect(() => {
    retrieveArticles();
    console.log("componenent is mounted");
  }, []);

  // gets all Articles from the Database. Calls getMethod from API which returns rows in database, then pass the data into Articles
  const retrieveArticles = () => {
    ArticlesService.getAll()
      .then((response) => {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return articles.map((article) => (
    <>
      <h1>{article.id}</h1>
      <h1>{article.title}</h1>
      <h1>{article.reviewer}</h1>
      <h1>{article.path}</h1>
      <h1>{article.comments}</h1>
    </>
  ));
};

export default Contact;
