import { BUTTON_TYPE } from '../../types/button';
import { IconButton } from '../Button';
import {
  dotdotdotStyle,
  paginationIsSelectedButtonStyle,
  paginationWrapperStyle,
} from './style.css';
import { MouseEvent, MouseEventHandler } from 'react';
import { ArrowRightIcon } from '../../Icon/ArrowRightIcon';
import { ArrowLeftIcon } from '../../Icon/ArrowLeftIcon';
import { themeColors } from '../../styles/theme.css';

interface IPagination {
  totalPages: number;
  page: number;
  movePrevPage: () => void;
  moveNextPage: () => void;
  changePage: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: number;
}

interface IPageButton {
  num: number;
  isCurrentPage: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PageButton = ({ num, isCurrentPage, onClick }: IPageButton) => {
  return (
    <button
      key={num}
      className={paginationIsSelectedButtonStyle[isCurrentPage ? 'selected' : 'default']}
      id={`page-button-${num}`}
      onClick={onClick}
    >
      {num + 1}
    </button>
  );
};

export const Pagination = ({
  totalPages,
  page,
  movePrevPage,
  moveNextPage,
  changePage,
}: IPagination) => {
  const createPageList = (totalPages: number, currPage: number) => {
    const pageList = [];

    for (let i = 0; i < totalPages; i++) {
      if (
        i === 0 ||
        i === totalPages - 1 ||
        i === currPage ||
        (i >= currPage - 1 && i <= currPage + 1)
      ) {
        pageList.push(i);
      } else {
        if (pageList[i - 1] !== null && pageList[i - 1] !== -1) {
          pageList.push(null);
        } else {
          pageList.push(-1);
        }
      }
    }
    return pageList.filter((e) => e !== -1);
  };

  return (
    <div className={paginationWrapperStyle}>
      <IconButton type={BUTTON_TYPE.BUTTON} onClick={movePrevPage}>
        <ArrowLeftIcon fill={themeColors.text[5]} width='1rem' height='1rem' />
      </IconButton>
      {totalPages <= 5
        ? Array(totalPages)
            .fill(null)
            .map((_, idx) => (
              <PageButton num={idx} isCurrentPage={page === idx} key={idx} onClick={changePage} />
            ))
        : createPageList(totalPages, page).map((num, idx) =>
            num !== null ? (
              <PageButton num={num} isCurrentPage={page === num} key={num} onClick={changePage} />
            ) : (
              <div className={dotdotdotStyle} key={`${num}${idx}`}>
                ...
              </div>
            ),
          )}
      <IconButton type={BUTTON_TYPE.BUTTON} onClick={moveNextPage}>
        <ArrowRightIcon fill={themeColors.text[5]} width='1rem' height='1rem' />
      </IconButton>
    </div>
  );
};
