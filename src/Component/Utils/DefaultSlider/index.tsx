import Carousel from 'react-material-ui-carousel';
import {
  circleStyle,
  sliderContainerStyle,
  sliderImageStyle,
  sliderTransparentLayerStyle,
  slideStyle,
} from './style.css';
import radicalGradient from '../../../assets/images/gradient-circle.svg';
import sliderImage from '../../../assets/images/slider-image-1.png';

const items = [
  {
    category: '면접 대비 문제 세트',
    title: 'IT 기업 취업 면접 대비 문제 없어요!',
    description: '기술 면접에 꼭 나올 개념들만 모인 문제세트를 풀어보세요.',
    imgSrc: sliderImage,
  },
  {
    category: 'AI 서술형 채점',
    title: 'AI 채점 베타서비스를 확인해보세요!',
    description:
      '서술형 문제를 풀고 AI로 채점받을 수 있어요. 어떤 방식으로 이루어지는지 함께 알아봐요.',
    imgSrc: sliderImage,
  },
];

function DefaultSlider() {
  return (
    <div className={sliderTransparentLayerStyle}>
      <img src={radicalGradient} className={circleStyle[1]} width='150px' height='150px' />
      <img src={radicalGradient} className={circleStyle[2]} width='150px' height='150px' />
      <img src={radicalGradient} className={circleStyle[3]} width='150px' height='150px' />
      <Carousel className={sliderContainerStyle} swipe>
        {items.map((item) => (
          <div className={slideStyle} key={item.title}>
            <p>{item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.imgSrc} className={sliderImageStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default DefaultSlider;
