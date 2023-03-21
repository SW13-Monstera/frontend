import { Pagination } from '../../Component/Pagination';
import { MetaTag } from '../utils/MetaTag';
import { usePagination } from '../../hooks/usePagination';
import {
  descriptionStyle,
  sectionStyle,
  tableCellStyle,
  tableBodyRowStyle,
  tableBodyStyle,
  tableHeadRowStyle,
  tableStyle,
  tableWrapStyle,
  titleStyle,
  titleTextWrapStyle,
  titleWrapStyle,
  linkStyle,
  rankColumnStyle,
} from './style.css';
import { useQuery } from 'react-query';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { IRankList } from '../../types/api/common';
import { URLWithParam } from '../../constants/url';
import { Link } from 'react-router-dom';

export const RankPage = () => {
  const { page, setNewPage } = usePagination();
  const { data: rankData } = useQuery<IRankList>(['getRankData', page], () =>
    commonApiWrapper.getRank(page),
  );

  return (
    <>
      <MetaTag title='CS Broker - 랭킹' />
      <section className={sectionStyle}>
        <div className={tableWrapStyle}>
          <div className={titleWrapStyle}>
            <img src='/src/assets/images/ranking.png' alt='랭킹' width='100px'></img>
            <div className={titleTextWrapStyle}>
              <h2 className={titleStyle}>리더보드</h2>
              <p className={descriptionStyle}>가장 많은 점수를 얻은 CS Broker가 되어보세요.</p>
            </div>
          </div>
          <table className={tableStyle}>
            <colgroup>
              <col className={rankColumnStyle}></col>
              <col span={2}></col>
            </colgroup>
            <thead>
              <tr className={tableHeadRowStyle}>
                <th className={tableCellStyle}>랭킹</th>
                <th className={tableCellStyle}>닉네임</th>
                <th className={tableCellStyle}>총점</th>
              </tr>
            </thead>
            <tbody className={tableBodyStyle}>
              {rankData?.contents.map(({ rank, username, score, id }) => (
                <tr className={tableBodyRowStyle} key={id}>
                  <td className={tableCellStyle}>{rank}</td>
                  <td className={tableCellStyle}>
                    <Link to={URLWithParam.PROFILE(id)} className={linkStyle}>
                      {username}
                    </Link>
                  </td>
                  <td className={tableCellStyle}>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalPages={rankData?.totalPage ?? 0} page={page} setPage={setNewPage} />
        </div>
      </section>
    </>
  );
};
