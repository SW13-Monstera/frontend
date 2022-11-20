import {
  containerStyle,
  flexBoxStyle,
  imageStyle,
  sliderItemCategoryStyle,
  sliderItemDescriptionStyle,
  textWrapperStyle,
  windowStyle,
} from './style.css';
import { useRef, useState } from 'react';
import { SLIDER_ITEMS } from '../DefaultSlider/items';
import { Link } from 'react-router-dom';

export const CustomCarousel = () => {
  const [currIdx, setCurrIdx] = useState(1);
  const [transition, setTransition] = useState(true);
  const items = useRef([SLIDER_ITEMS[SLIDER_ITEMS.length - 1], ...SLIDER_ITEMS]);

  const replaceSlide = (idx: number) => {
    setTimeout(() => {
      setCurrIdx(idx);
      setTransition(false);
    }, 500);
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

  return (
    <div className={containerStyle}>
      <button
        onClick={() => {
          moveSlide(-1);
        }}
      >
        {'<'}
      </button>
      <div className={windowStyle}>
        <div
          className={flexBoxStyle}
          style={{
            transition: transition ? 'transform 500ms ease-in-out' : '',
            transform: `translateX(-${currIdx * 100}%)`,
          }}
        >
          {items.current.map((item, idx) => (
            <div key={`${item.id} ${idx}`} className={imageStyle}>
              <Link to={item.link}>
                <div className={textWrapperStyle}>
                  <p className={sliderItemCategoryStyle}>{item.category}</p>
                  <h2>{item.title}</h2>
                  <p className={sliderItemDescriptionStyle}>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          moveSlide(1);
        }}
      >
        {'>'}
      </button>
    </div>
  );
};
