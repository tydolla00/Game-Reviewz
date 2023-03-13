import logo1 from "../assets/godofwar.jpg";
import logo2 from "../assets/pokemonscarletviolet.jpg";
import React, { useState } from "react";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevImage = () => {
//     const lastIndex = images.length - 1;
//     const shouldResetIndex = currentIndex === 0;
//     const index = shouldResetIndex ? lastIndex : currentIndex - 1;
//     setCurrentIndex(index);
//   }

//   const nextImage = () => {
//     const lastIndex = images.length - 1;
//     const shouldResetIndex = currentIndex === lastIndex;
//     const index = shouldResetIndex ? 0 : currentIndex + 1;
//     setCurrentIndex(index);
//   }

//   return (
//     <div className="carousel">
//       <button onClick={prevImage}>Prev</button>
//       <img src={images[currentIndex]} alt="slide" />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default Carousel;

const contentStyle = {
  position: "absolute",
  top: "80%",
  left: "43%",
  color: "#fff",
  textAlign: "center",
};

// function CarouselContainer() {
//   return (
//     <Carousel autoplay className='carousel-container'>
//       <div>
//         <img src={logo1} alt="God of War Ragnarok" />
//         <h3 style={contentStyle}>God of War Ragnarok</h3>
//       </div>
//       <div>
//         <img src={logo2} alt="Pokemon Scarlet & Violet" />
//         <h3 style={contentStyle}>Pokemon Scarlet & Violet</h3>
//       </div>
//     </Carousel>
//   );
// } export default CarouselContainer;
