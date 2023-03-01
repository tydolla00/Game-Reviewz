import hogwarts from "../assets/hogwartslegacy.jpeg";
import eldenring from "../assets/eldenring.jpeg";
import pokemon from "../assets/pokemonscarletviolet.jpg";
import { SearchBar } from "../components/navigation";
import ArticlesService from "../services/ArticlesService";
import { useState, useEffect } from "react";

const Games = (props) => {
  // API will return array of objects so initialize state as an array.
  const [article, setArticles] = useState([]);

  const images = [{ hogwarts }, { eldenring }, { pokemon }];

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

  return (
    <>
      <h1 className="bigText">{props.page ? props.page : "Video Games"}</h1>
      <div style={topContainer}>
        <img
          src={hogwarts}
          style={articleStyle}
          id="topStyle"
          alt="Hogwarts Legacy"
        />
        <div className="rectangle">
          {/* <h2 style={headingStyle}>{article[0].title + ": Available Now!"}</h2>
          <div style={boxText}>{article[0].title}</div>
          <div style={boxText}>{article[0].reviewer}</div>
          <div style={boxText}>{article[0].comments + " Reviews!"}</div> */}
        </div>
      </div>
      <h1 className="bigText">
        {props.page ? props.page : "Video Game"} Articles
      </h1>
      <div className="sortBox">
        <form className="doge">
          <label for="sort">Sort By:</label>
          <select name="sortby" id="sort">
            <option value="Release Date">Release Date</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Most Reviews">Most Reviews</option>
          </select>
          <label for="genre">Genre:</label>
          <select name="sortby" id="genre">
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <SearchBar />
          <input id="" type="submit" value="submit" />
        </form>
      </div>
      <br />
      <Articles db={article} img={images} />
    </>
  );
};
export default Games;

// Currently working on getting the correct images in place.
export const Articles = (props) => {
  return props.db.map((item) => (
    <>
      <div className="articleBox">
        <img
          src={item.title === "Hogwarts Legacy" ? props.img[0] : props.img[1]}
          style={articleStyle}
          alt="A Game"
        />
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
      <hr />
    </>
  ));
};

const articleStyle = {
  cursor: "pointer",
  "object-fit": "cover",
  width: "300px",
  "padding-left": "1%",
};
const imgStyle = {
  width: "40%",
  height: "auto",
  border: "solid",
  "border-right": "none",
  "border-width": "thick",
};
const headingStyle = {
  "padding-left": ".5em",
};
const topContainer = {
  display: "flex",
  height: "300px",
};
const boxText = {
  padding: "1em",
  // 'margin-top': '50px'
};
