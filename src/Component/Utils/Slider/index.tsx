import Carousel from 'react-material-ui-carousel';
import { sliderContainerStyle, slideStyle } from './style.css';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
];

function Slider() {
  return (
    <Carousel className={sliderContainerStyle}>
      {items.map((item) => (
        <div className={slideStyle} key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </Carousel>
  );
}
export default Slider;
