import { Carousel } from "react-responsive-carousel";
import ScarletViolet from "../assets/scarletvioletblur.jpg";
import Fortnite from "../assets/fortnitecarousel.jpeg";
import SeriesX from "../assets/seriesx.jpg";
import iPad from "../assets/ipad9Blur.jpg";
/*
  ? @param array - array of objects full of carousel info
*/
export default function CarouselComponent({ array = undefined }) {
  // * Default Slides Used If array is not specified.
  const defaultArray = array || [
    {
      img: ScarletViolet,
      title: "Pokemon Scarlet and Violet",
      id: 7,
      page: "games",
    },
    {
      img: Fortnite,
      title: "Fortnite",
      id: 1,
      page: "games",
    },
    {
      img: SeriesX,
      title: "Xbox Series X",
      id: 1,
      page: "tech",
    },
    {
      img: iPad,
      title: "iPad 9th Generation",
      id: 2,
      page: "tech",
    },
  ];

  const handleSlideClicked = (index) => {
    if (window.location.hostname === "localhost") {
      window.location.assign(
        `http://localhost:3000/${array[index].page}/${array[index].id}`
      );
    } else {
      window.location.assign(
        `https://www.gamereviewz.dev/${array[index].page}/${array[index].id}`
      );
    }
  };

  return (
    <div className="carouselcomponent">
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        onClickItem={handleSlideClicked}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        width="100%"
      >
        {array.map((item, index) => (
          <div key={item.id}>
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
