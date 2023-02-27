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

//Notes for Paul, when defining a class use className, class is reserved for classes in React.
const Cards = (props) => {
  return props.db.map((item) => (
    <>
      <div className="gallery">
        <img src={item.img} alt="Zelda: Tears of the Kingdom" />
        <div className="title">{item.title}</div>
      </div>
    </>
  ));
};

function Home() {
  const db = [
    { title: "Zelda Tears of the Kingdom Release Date Announced", img: Zelda },
    { title: "Fifa 2023 World Cup Mode Review", img: Fifa },
    { title: "Google Pixel 7 Review", img: Pixel },
    { title: "Star Wars: Jedi Survivor Release Date Announced", img: Jedi },
    { title: "Lego Star Wars: The Skywalker Saga Review", img: LegoSW },
    { title: "Macbook Pro 2022 Review", img: Macbook },
    { title: "Pokemon Platinum Review", img: Platinum },
    { title: "iPhone 14 Pro Sales Reported", img: Iphone },
    { title: "Xbox Series X Review", img: Seriesx },
    { title: "Star Wars: Battlefront 2 Expansion Review", img: Battlefront2 },
    { title: "Samsung Z Fold Review", img: Zfold },
    { title: "Nintendo Switch OLED Review", img: Switch },
  ];

  return (
    <>
      <h1 className="bigText">Welcome to the world of Geeks!</h1>
      <h1 className="bigText">Top Articles</h1>
      <div className="container">
        <Cards db={db} />
      </div>

      {/* <CarouselContainer/> */}

      {/* <div class="container sidebar">
        <h2>Popular Tech Companies</h2>
        <ol class="topCompanies">
          <li>Apple</li>
          <li>Google</li>
          <li>Samsung</li>
          <li>Microsoft</li>
          <li>Amazon</li>
        </ol>

        <h2>Popular Gaming Companies</h2>
        <ol class="topCompanies">
          <li>Nintendo</li>
          <li>Playstation</li>
          <li>Xbox</li>
          <li>Epic Games</li>
          <li>Rockstar Games</li>
        </ol>

        <h2>Upcoming Releases</h2>
        <ul class="releases">
          <li class="games">Spongebob Squarepants: The Cosmic Shake - <p class="date">January 31st</p></li>
          <li class="games">Hogwarts Legacy - <p class="date">February 10</p></li>
          <li class="games">Star Wars Jedi Survivor - <p class="date">March 17</p></li>
          <li class="games">The Legend of Zelda: Tears of the Kingdom - <p class="date">May 12</p></li>
          <li class="games">Suicide Squad: Kill the Justice League - <p class="date">May 26</p></li>
        </ul>
      </div> */}
    </>
  );
}
export default Home;
