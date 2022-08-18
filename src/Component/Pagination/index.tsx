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

interface IPageButton {
  num: number;
  isCurrentPage: boolean;
  onClick: any;
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
        pageList.push(null);
      }
    }

    return pageList;
  };

  return (
    <div className={paginationWrapperStyle}>
      <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY} onClick={movePrevPage}>
        <LeftArrowIcon fill={COLOR.TITLEACTIVE} width='20px' height='20px' />
      </IconButton>
      {totalPages <= 5
        ? Array(totalPages)
            .fill(null)
            .map((_, idx) => (
              <PageButton num={idx} isCurrentPage={page === idx} key={idx} onClick={changePage} />
            ))
        : createPageList(totalPages, page).map((num) =>
            num !== null ? (
              <PageButton num={num} isCurrentPage={page === num} key={num} onClick={changePage} />
            ) : (
              <>🐛</>
            ),
          )}
      <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY} onClick={moveNextPage}>
        <RightArrowIcon fill={COLOR.TITLEACTIVE} width='20px' height='20px' />
      </IconButton>
    </div>
  );
};
