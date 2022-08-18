import { BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { IconButton } from '../Button';
import { LeftArrowIcon } from '../../Icon/LeftArrowIcon';
import { RightArrowIcon } from '../../Icon/RightArrowIcon';
import { COLOR } from '../../constants/color';
import { paginationIsSelectedButtonStyle, paginationWrapperStyle } from './style.css';
import { MouseEventHandler } from 'react';

interface IPagination {
  totalPages: number;
  page: number;
  setPage: (currPage: number) => void;
  size?: number;
}

export const Pagination = ({ totalPages, page, setPage }: IPagination) => {
  const movePrevPage = () => {
    if (page <= 0) return;
    setPage(page - 1);
  };
  const moveNextPage = () => {
    if (page > totalPages - 1) return;
    setPage(page + 1);
  };
  const changePage: MouseEventHandler<HTMLButtonElement> = (event) => {
    const eventTarget = event.target as HTMLButtonElement;
    setPage(parseInt(eventTarget.innerText) - 1);
  };

  return (
    <div className={paginationWrapperStyle}>
      <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY} onClick={movePrevPage}>
        <LeftArrowIcon fill={COLOR.TITLEACTIVE} width='20px' height='20px' />
      </IconButton>
      {Array(totalPages)
        .fill(null)
        .map((_, idx) =>
          page === idx ? (
            <button
              key={idx}
              className={paginationIsSelectedButtonStyle['selected']}
              id={`page-button-${idx}`}
            >
              {idx + 1}
            </button>
          ) : (
            <button
              key={idx}
              className={paginationIsSelectedButtonStyle['default']}
              onClick={changePage}
            >
              {idx + 1}
            </button>
          ),
        )}
      <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY} onClick={moveNextPage}>
        <RightArrowIcon fill={COLOR.TITLEACTIVE} width='20px' height='20px' />
      </IconButton>
    </div>
  );
};
