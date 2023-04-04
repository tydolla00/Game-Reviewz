// import CarouselContainer from "../components/carousel";
import Zelda from "../assets/zelda.jpg";
import Fifa from "../assets/fifa23.jpg";
import Pixel from "../assets/googlepixel.jpg";
import Jedi from "../assets/jedisurvivor.jpg";
import LegoSW from "../assets/legostarwars.jpg";
import Macbook from "../assets/macbook.jpg";
import Platinum from "../assets/pokemonplatinum.jpg";
import Iphone from "../assets/iphone14pro.jpg";
import Switch from "../assets/switch.jpg";
import Battlefront2 from "../assets/battlefront2.jpg";
import Seriesx from "../assets/seriesx.jpg";
import Zfold from "../assets/zfold.jpg";
import "../styles/Home.scss";
import { useEffect, useState } from "react";
import ArticlesService from "../services/ArticlesService";
import { NavLink } from "react-router-dom";
import CarouselComponent from "../components/carousel";

//Notes for Paul, when defining a class use className, class is reserved for classes in React.
// Maybe turn the container into a grid??? Can also be called from the database, maybe add columnPriority as a column and then give a priority number,
// then in database select top 16 from columnPriority
function Home() {
  const carouselDb = [
    {
      img: Zelda,
      title: "Zelda Tears of The Kingdom",
      id: 5,
      page: "games",
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

  let demodb = [];
  const [articles, setArticles] = useState([]);
  const [techArticles, setTechArticles] = useState([]);
  demodb = articles.concat(techArticles);
  shuffleArray(demodb);

  useEffect(() => {
    retrieveArticles();
  }, []);

  const retrieveArticles = () => {
    ArticlesService.getAllGames()
      .then((response) => {
        setArticles(response.data);
      })
      .then(() => {
        ArticlesService.getAllTech().then((response) => {
          setTechArticles(response.data);
        });
      })
      .catch((e) => {
        console.log(e);
        return <div>Hello You have found an error</div>;
      });
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <>
      <CarouselComponent array={carouselDb} />
      <div className="homeContainer">
        {/* <CarouselComponent img1={Zelda} img2={Seriesx} img3={Pixel} /> */}
        <div className="cardsContainer">
          <Cards db={demodb} />
        </div>
        <Sidebar />
        {/* <CarouselContainer/> */}
      </div>
    </>
  );
}
export default Home;

const Cards = (props) => {
  return props.db.map((item) => (
    <>
      <NavLink to={`/${item.base}/` + item.id} className="navlink">
        <div key={item.id} className="card">
          <img src={item.path} alt="Zelda: Tears of the Kingdom" />
          <div id="title">{item.title}</div>
        </div>
      </NavLink>
    </>
  ));
};

// This can be reworked to function/look better.
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="list">
        <h2 className="sidebarHeader">Popular Tech Companies</h2>
        <ol className="topCompanies">
          <li>Apple</li>
          <li>Google</li>
          <li>Samsung</li>
          <li>Microsoft</li>
          <li>Amazon</li>
        </ol>
      </div>

      <div className="list">
        <h2 className="sidebarHeader">Popular Gaming Companies</h2>
        <ol className="topCompanies">
          <li>Nintendo</li>
          <li>Playstation</li>
          <li>Xbox</li>
          <li>Epic Games</li>
          <li>Rockstar Games</li>
        </ol>
      </div>

      <div className="list">
        <h2 className="sidebarHeader">Upcoming Releases</h2>
        <ul className="releases">
          <li className="games">
            Spongebob Squarepants: The Cosmic Shake -{" "}
            <p className="date">January 31st</p>
          </li>
          <li className="games">
            Hogwarts Legacy - <p className="date">February 10</p>
          </li>
          <li className="games">
            Star Wars Jedi Survivor - <p className="date">March 17</p>
          </li>
          <li className="games">
            The Legend of Zelda: Tears of the Kingdom -{" "}
            <p className="date">May 12</p>
          </li>
          <li className="games">
            Suicide Squad: Kill the Justice League -{" "}
            <p className="date">May 26</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
