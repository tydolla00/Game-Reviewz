import Games from "./games";
import { useState, useEffect } from "react";
import ArticlesService from "../services/ArticlesService";
import Seriesx from "../assets/seriesx.jpg";
import Zfold from "../assets/zfold.jpg";
import Pixel from "../assets/googlepixel.jpg";

export default function Tech() {
  const [articles, setArticles] = useState([]);

  const carouselDb = [
    {
      img: Zfold,
      title: "Samsung Z Fold",
      id: 6,
      page: "tech",
    },
    {
      img: Seriesx,
      title: "Xbox Series X",
      id: 5,
      page: "tech",
    },
    {
      img: Pixel,
      title: "Google Pixel 7",
      id: 1,
      page: "tech",
    },
  ];

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
      <Games articles={articles} page="Tech" carouselDb={carouselDb} />
    </>
  );
}
