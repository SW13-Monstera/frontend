import Carousel from 'react-material-ui-carousel';
import { sliderContainerStyle, slideStyle } from './style.css';

const items = [
  {
    name: '🧑‍💻 Computer Science 지식을 학습해요!',
    description: '크왕과 함께라면 할 수 있어요',
  },
  {
    name: '🧠 딥러닝 기초를 다져봐요!',
    description: 'Play boy와 함께라면 할 수 있어요',
  },
];

function DefaultSlider() {
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
export default DefaultSlider;
