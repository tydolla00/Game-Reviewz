import { useRef } from "react";
import Ty from "../assets/tyabout.jpeg";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
const SlideContainer = ({ cards, offset }) => {
  return (
    <div ref={offset} className="slideContainer">
      {cards.map((card) => (
        <Slide title={card.title} img={card.img} desc={card.desc} />
      ))}
    </div>
  );
};

const Slide = ({ title, img, desc }) => {
  return (
    <div className="slide">
      <img style={{ height: "250px", width: "100%" }} src={img} />
      <div>
        <p>{title}</p>
        <p>
          <i>{desc}</i>
        </p>
      </div>
    </div>
  );
};

const Slider = () => {
  const ref = useRef(null);
  const data = [
    {
      title: "Apple WWDC Review",
      img: Ty,
      desc: "Apple's long anticipated developer conference is finally here and it did not dissapoint.",
    },
    {
      title: "Card 2",
      img: Ty,
      desc: "Hello World",
    },
    {
      title: "Card 3",
      img: Ty,
      desc: "Hello World",
    },
    {
      title: "Card 4",
      img: Ty,
      desc: "Hello World",
    },
    {
      title: "Card 5",
      img: Ty,
      desc: "Hello World",
    },
  ];
  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };
  return (
    <>
      <h1>Hot Topics 🔥</h1>
      <div style={{ display: "flex" }}>
        <ArrowLeftCircle
          style={{ fontSize: "300px", cursor: "pointer" }}
          onClick={() => scroll(-300)}
        />
        <div>
          <SlideContainer offset={ref} cards={data} />
        </div>
        <ArrowRightCircle
          style={{ fontSize: "300px", cursor: "pointer" }}
          onClick={() => scroll(300)}
        />
      </div>
    </>
  );
};
export default Slider;
