import { Carousel } from 'antd';
import logo1 from '../assets/godofwar.jpg';
import logo2 from '../assets/pokemonscarletviolet.jpg';
import 'antd/dist/antd.min.css';
import '../App.css';

const contentStyle = {
  position: 'absolute',
  top: '80%',
  left: '43%',
  color: '#fff',
  textAlign: 'center',
};

function CarouselContainer() {
  return (
    <Carousel autoplay className='carousel-container'>
      <div>
        <img src={logo1} alt="God of War Ragnarok" />
        <h3 style={contentStyle}>God of War Ragnarok</h3>
      </div>
      <div>
        <img src={logo2} alt="Pokemon Scarlet & Violet" />
        <h3 style={contentStyle}>Pokemon Scarlet & Violet</h3>
      </div>
    </Carousel>
  );
} export default CarouselContainer;
