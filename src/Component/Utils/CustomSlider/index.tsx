import {
  buttonListStyle,
  buttonStyle,
  containerStyle,
  flexBoxStyle,
  imageStyle,
  sliderImageStyle,
  sliderItemCategoryStyle,
  sliderItemDescriptionStyle,
  sliderLeftStyle,
  sliderRightStyle,
  sliderStyle,
  sliderTransparentLayerCircleStyle,
  windowStyle,
} from './style.css';
import { useRef, useState } from 'react';
import { SLIDER_ITEMS } from './items';
import { Link } from 'react-router-dom';
import { ReactComponent as MaskGroup } from '../../../assets/images/mask-group.svg';
import { useInterval } from '../../../hooks/useInterval';

export const CustomCarousel = () => {
  const [currIdx, setCurrIdx] = useState(1);
  const [transition, setTransition] = useState(true);
  const items = useRef([SLIDER_ITEMS[SLIDER_ITEMS.length - 1], ...SLIDER_ITEMS]);

  const replaceSlide = (idx: number) => {
    setTimeout(() => {
      setCurrIdx(idx);
      setTransition(false);
    }, 700);
  };

  const moveSlide = (offset: number) => {
    let nextIdx = currIdx + offset;
    setCurrIdx(nextIdx);
    if (nextIdx <= 0) {
      nextIdx = items.current.length - 1;
      replaceSlide(nextIdx);
    } else if (nextIdx >= items.current.length - 1) {
      nextIdx = 0;
      replaceSlide(nextIdx);
    }
    setTransition(true);
  };

  useInterval(() => {
    moveSlide(1);
  }, 4000);

  return (
    <div className={containerStyle}>
      <div className={windowStyle}>
        <div className={buttonListStyle}>
          <button
            aria-label='move-previous'
            onClick={() => {
              moveSlide(-1);
            }}
            className={buttonStyle}
          >
            {'<'}
          </button>
          <span>{currIdx + 1 > items.current.length - 1 ? 1 : currIdx + 1}</span>
          <span>|</span>
          <span>{items.current.length - 1}</span>
          <button
            aria-label='move-next'
            onClick={() => {
              moveSlide(1);
            }}
            className={buttonStyle}
          >
            {'>'}
          </button>
        </div>
        <div
          className={flexBoxStyle}
          style={{
            transition: transition ? 'transform 700ms ease-in-out' : '',
            transform: `translateX(-${currIdx * 100}%)`,
          }}
        >
          {items.current.map((item, idx) => (
            <div
              key={`${item.id} ${idx}`}
              className={imageStyle}
              style={{
                backgroundColor: item.backgroundColor,
              }}
            >
              <MaskGroup className={sliderTransparentLayerCircleStyle} />
              <Link to={item.link}>
                <div className={sliderStyle}>
                  <div className={sliderLeftStyle}>
                    <p className={sliderItemCategoryStyle}>{item.category}</p>
                    <h2>{item.title}</h2>
                    <p className={sliderItemDescriptionStyle}>{item.description}</p>
                  </div>
                  <div className={sliderRightStyle}>
                    <img
                      width='250px'
                      height='auto'
                      src={item.imgSrc}
                      className={sliderImageStyle}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
