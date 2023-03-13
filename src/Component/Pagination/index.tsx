import {
  arrowButtonStyle,
  dotdotdotStyle,
  paginationIsSelectedButtonStyle,
  paginationWrapperStyle,
} from './style.css';
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
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const MAX_PAGE_NUM = 10;

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
    if (page >= totalPages - 1) return;
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
      <button type='button' onClick={movePrevPage} className={arrowButtonStyle}>
        <img src='/src/assets/images/arrow-left.png' width='7px' />
      </button>
      {totalPages <= MAX_PAGE_NUM
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
      <button type='button' onClick={moveNextPage} className={arrowButtonStyle}>
        <img src='/src/assets/images/arrow-right.png' width='7px' />
      </button>
    </div>
  );
};
