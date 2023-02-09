import { MetaTag } from '../utils/MetaTag';
import {
  contentStyle,
  itemDimmedStyle,
  itemLinkStyle,
  itemStyle,
  itemTextStyle,
  itemTimeStyle,
  listStyle,
  titleNumberStyle,
  titleWrapStyle,
} from './style.css';

export const NotificationPage = () => {
  return (
    <>
      <MetaTag title='CS Broker - 알림' />
      <section className={contentStyle}>
        <div className={titleWrapStyle}>
          읽지 않은 알림 <strong className={titleNumberStyle}>5</strong>개
        </div>
        <ul className={listStyle}>
          <li className={itemStyle}>
            <a href='#0' className={itemLinkStyle}>
              <div className={itemTextStyle}>
                shiroed1211님이 6348번 (1085번 - 직사각형에서 탈출) 이슈에 댓글을 달았어요!
              </div>
              <span className={itemTimeStyle}>1분전</span>
            </a>
          </li>
          <li className={itemDimmedStyle}>
            <a href='#0' className={itemLinkStyle}>
              <span className={itemTextStyle}>shiroed1211님이 1122번 이슈에 댓글을 달았어요!</span>
              <span className={itemTimeStyle}>2시간전</span>
            </a>
          </li>
          <li className={itemStyle}>
            <a href='#0' className={itemLinkStyle}>
              <span className={itemTextStyle}>34992번 문제가 재채점되었어요.</span>
              <span className={itemTimeStyle}>28일전</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
