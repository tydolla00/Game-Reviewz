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
import  Seriesx from "../assets/seriesx.jpg";
import Zfold from "../assets/zfold.jpg";
import "../Home.css";

function Home() {
  return (
    <>
      <h1>Welcome to the world of Geeks!</h1>
     {/* <CarouselContainer/> */}

      <h1>Top Articles</h1>
      <div class ="container content">
        <table>

          <tr>
          <td>
          <div class="gallery">
            <img src={Zelda} alt="Zelda: Tears of the Kingdom"/>
              <div class ="title">Zelda Tears of the Kingdom Release Date Announced</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Fifa} alt="Fifa 23"/>
              <div class ="title">Fifa 2023 World Cup Mode Review</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Pixel} alt="Gogle Pixel 7"/>
              <div class ="title">Google Pixel 7 Review</div>
          </div>
          </td>
          <td class="lastColumn">
          <div class="gallery">
            <img src={Jedi} alt="Star Wars: Jedi Survivor"/>
              <div class ="title">Star Wars: Jedi Survivor Release Date Announced</div>
          </div>
          </td>
          </tr>



          <tr>
          <td>
          <div class="gallery">
            <img src={LegoSW} alt="Lego Star Wars"/>
              <div class ="title">Lego Star Wars: The Skywalker Saga Review</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Macbook} alt="Macbook Pro 2022"/>
              <div class ="title">Macbook Pro 2022 Review</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Platinum} alt="Pokemon Platinum"/>
              <div class ="title">Pokemon Platinum Review</div>
          </div>
          </td>
          <td class="lastColumn">
          <div class="gallery">
            <img src={Iphone} alt="iPhone 14 Pro"/>
              <div class ="title">iPhone 14 Pro Sales Reported</div>
          </div>
          </td>
          </tr>



          <tr>
          <td>
          <div class="gallery">
            <img src={Seriesx} alt="Xbox Series X"/>
              <div class ="title">Xbox Series X Review</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Battlefront2} alt="Star Wars: Battlefront 2"/>
              <div class ="title">Star Wars: Battlefront 2 Expansion Review</div>
          </div>
          </td>
          <td>
          <div class="gallery">
            <img src={Zfold} alt="Samsung Z Fold"/>
              <div class ="title">Samsung Z Fold Review</div>
          </div>
          </td>
          <td class="lastColumn">
          <div class="gallery">
            <img src={Switch} alt="Nintendo Switch"/>
              <div class ="title">Nintendo Switch OLED Reveiw</div>
          </div>
          </td>
          </tr>
        </table>
      </div>

      <div class="container sidebar">
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
      </div>

    </>
  );
}

export default Home;
