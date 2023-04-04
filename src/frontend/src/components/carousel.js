import { Carousel } from "react-responsive-carousel";
import battlefront2 from "../assets/battlefront2.jpeg";
import hogwarts from "../assets/hogwarts16-9.jpeg";
import eldenring from "../assets/eldenring16-9.jpeg";
import smash from "../assets/smash16-9.png";

export default function CarouselComponent({ array = undefined }) {

  // ## Can be used to render dynamically from the database. 300 x 970
  const handleSlideChange = (index) => {};

  // ## Default Slides Used If array is not specified.
  const defaultArray = [
    {
      img: battlefront2,
      title: "Star Wars Battlefront II",
    },
    {
      img: hogwarts,
      title: "Hogwarts Legacy",
    },
    {
      img: eldenring,
      title: "Elden Ring",
    },
    {
      img: smash,
      title: "Super Smash Bros Ultimate",
    },
  ];

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
              alt="Carousel Images"
            />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
