import { Carousel } from "react-responsive-carousel";
import battlefront2 from "../assets/battlefront2.jpeg";
import hogwarts from "../assets/hogwarts16-9.jpeg";
import eldenring from "../assets/eldenring16-9.jpeg";
import smash from "../assets/smash16-9.png";

export default function CarouselComponent({ array }) {
  // @@ Can be used to render dynamically from the database. 300 x 970
  const handleSlideChange = (index) => {};
  const defaultArray = [battlefront2, hogwarts, eldenring, smash];
  if (array === undefined) array = defaultArray;
  return (
    <div className="carouselcomponent">
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        // onChange={handleSlideChange}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        width="100%"
      >
        {array.map((item, index) => (
          <div>
            <img
              className="imgstyle"
              src={item.img === undefined ? defaultArray[index] : item.img}
            />
            <p className="legend">{item.title}</p>
          </div>
        ))}
        {/* <div>
          <img
            className="imgstyle"
            src={img1 === undefined ? battlefront2 : img1}
          />
          <p className="legend">Star Wars Battlefront2</p>
        </div>
        <div>
          <img
            className="imgstyle"
            src={img2 === undefined ? hogwarts : img2}
          />
          <p className="legend">Hogwarts Legacy</p>
        </div>
        <div>
          <img className="imgstyle" src={img3 === undefined ? smash : img3} />
          <p className="legend">Smash Ultimate</p>
        </div>
        <div>
          <img className="imgstyle" src={eldenring} />
          <p className="legend">Elden Ring</p>
        </div> */}
      </Carousel>
    </div>
  );
}
