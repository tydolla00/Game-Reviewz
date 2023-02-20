import hogwarts from "../assets/hogwartslegacy.jpeg";
import eldenring from "../assets/eldenring.jpeg";
import pokemon from "../assets/pokemonscarletviolet.jpg";
import { SearchBar } from "../components/navigation";

export default function Games() {
  const db = [
    {
      game: "Hogwarts Legacy",
      src: hogwarts,
      reviewer: "Tyheir Brooks",
      numComments: 10,
      review:
        "Hogwarts Legacy, the most highly anticpated game of 2023 releases with some magical features that will keep you invested for many hours. ",
    },
    {
      game: "Elden Ring",
      src: eldenring,
      reviewer: "Paul Spadaccini",
      numComments: 5,
      review:
        "Elden Ring, rated best game of the year brings you PvE action you've never seen before. Elden Ring comes with incredible difficulty and challenging bosses that will leave you raging at your screen for hours. ",
    },
    {
      game: "Pokemon Scarlet & Violet",
      src: pokemon,
      reviewer: "John Beltran",
      numComments: 30,
      review:
        "Pokemon Scarlet & Violet was a highly anticipated game due to the recent release of Pokemon Arceus. Fans wondered how Nintendo would capitalize off the success of Pokemon Arceus and our review will leave you with no doubt on whether this game is worth it for you",
    },
  ];
  return (
    <>
      <h1>Video Games</h1>
      <div style={topContainer}>
        <img src={hogwarts} style={imgStyle} alt="Hogwarts Legacy" />
        <div className="rectangle">
          <h2 style={headingStyle}>{db[0].game + ": Available Now!"}</h2>
          <div style={boxText}>{db[0].game}</div>
          <div style={boxText}>{db[0].reviewer}</div>
          <div style={boxText}>{db[0].numComments + " Reviews!"}</div>
        </div>
      </div>
      <h1>Video Game Articles</h1>
      <div className="sortBox">
        <form>
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
      <Articles db={db} />
    </>
  );
}
export const Articles = (props) => {
  return props.db.map((item) => (
    <>
      <div className="articleBox">
        <img src={item.src} style={articleStyle} alt="Elden Ring" />
        <div className="vl"></div>
        <div>
          <h1>{item.game}</h1>
          <p className="articleText">{item.review}</p>
          <div className="articleBox">
            <p>{item.game}</p>
            <p id="bottom">{item.reviewer}</p>
            <p id="bottom">{item.numComments}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  ));
};

const articleStyle = {
  height: "auto",
  width: "300px",
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
