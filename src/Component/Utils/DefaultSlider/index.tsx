import Carousel from 'react-material-ui-carousel';
import {
  sliderContainerStyle,
  sliderImageStyle,
  sliderItemCategoryStyle,
  sliderItemDescriptionStyle,
  sliderLeftStyle,
  sliderRightStyle,
  sliderStyle,
  sliderTransparentLayerCircleStyle,
  sliderTransparentLayerStyle,
} from './style.css';
import { ReactComponent as MaskGroup } from '../../../assets/images/mask-group.svg';
import { Link } from 'react-router-dom';
import { SLIDER_ITEMS } from './items';

function DefaultSlider() {
  return (
    <div className={sliderTransparentLayerStyle}>
      <MaskGroup className={sliderTransparentLayerCircleStyle} />
      <Carousel className={sliderContainerStyle} swipe>
        {SLIDER_ITEMS.map((item) => (
          <Link key={item.title} to={item.link}>
            <div className={sliderStyle}>
              <div className={sliderLeftStyle}>
                <p className={sliderItemCategoryStyle}>{item.category}</p>
                <h2>{item.title}</h2>
                <p className={sliderItemDescriptionStyle}>{item.description}</p>
              </div>
              <div className={sliderRightStyle}>
                <img width='250px' height='auto' src={item.imgSrc} className={sliderImageStyle} />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
export default DefaultSlider;
