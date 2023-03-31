import { SearchBar } from "../components/navigation";
import ArticlesService from "../services/ArticlesService";
import { useState, useEffect } from "react";
import "../styles/Games.scss";
import { NavLink } from "react-router-dom";
import CarouselComponent from "../components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import battlefront2Big from "../assets/battlefront2.jpeg";
import hogwartsBig from "../assets/hogwarts16-9.jpeg";
import eldenringBig from "../assets/eldenring16-9.jpeg";
import smashBig from "../assets/smash16-9.png";

const Games = (props) => {
  // ## Static Array for the carousel component.
  const carouselDb = [
    {
      img: battlefront2Big,
      title: "Star Wars Battlefront II",
    },
    {
      img: hogwartsBig,
      title: "Hogwarts Legacy",
    },
    {
      img: eldenringBig,
      title: "Elden Ring",
    },
    {
      img: smashBig,
      title: "Super Smash Bros Ultimate",
    },
  ];

  // API will return array of objects so initialize state as an array.
  const [article, setArticles] = useState([]);

  // useEffect is called whenever the page is rendered/rerendered. [] allows for API to only be called once.
  useEffect(() => {
    retrieveArticles();
    console.log("componenent is mounted");
    console.log(window.location.pathname);
  }, []);

  // gets all Articles from the Database. Calls getMethod from API which returns rows in database, then pass the data into Articles
  const retrieveArticles = () => {
    ArticlesService.getAllGames()
      .then((response) => {
        setArticles(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1 className="gbigText">{props.page ? props.page : "Video Games"}</h1>
      <CarouselComponent array={carouselDb} />
      <h1 className="gbigText">
        {props.page ? props.page : "Video Game"} Articles
      </h1>
      {/* <div className="sortBox">
        <form>
          <label htmlFor="sort">Sort By:</label>
          <select name="sortby" id="sort" className="selectOptions">
            <option value="Release Date">Release Date</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Most Reviews">Most Reviews</option>
          </select>
          <label htmlFor="genre">Genre:</label>
          <select name="sortby" id="genre" className="selectOptions">
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <SearchBar />
          <input id="" type="submit" value="submit" />
        </form>
      </div> */}
      <br />
      <Articles db={props.articles == null ? article : props.articles} />
    </>
  );
};
export default Games;

// Currently working on getting the correct images in place.
export const Articles = (props) => {
  const page = window.location.pathname;
  return props.db.map((item) => (
    <>
      <div className="articleBox">
        <NavLink to={`${page}/` + item.id}>
          <img src={item.path} className="articleStyle" alt="A Game" />
        </NavLink>
        <div className="vl"></div>
        <div>
          <h1>{item.title}</h1>
          <p className="articleText">{item.review}</p>
          <div className="articleBox">
            <p>{item.title}</p>
            <p id="bottom">{item.reviewer}</p>
            <p id="bottom">{item.comments}</p>
          </div>
        </div>
      </div>
      <hr className=".gline" />
    </>
  ));
};
