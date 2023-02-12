import { useQuery } from 'react-query';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import { INotificationList } from '../../types/api/common';
import { timeForToday } from '../../utils/timeForToday';
import { MetaTag } from '../utils/MetaTag';
import {
  contentStyle,
  emptyStyle,
  itemLinkStyle,
  itemStyle,
  itemTextStyle,
  itemTimeStyle,
  listStyle,
  titleNumberStyle,
  titleWrapStyle,
} from './style.css';

export const NotificationPage = () => {
  const { data: notificationData } = useQuery<INotificationList>('getUserInfoData', () =>
    commonApiWrapper.getNotifications(),
  );
  return (
    <>
      <MetaTag title='CS Broker - 알림' />
      <section className={contentStyle}>
        <div className={titleWrapStyle}>
          읽지 않은 알림{' '}
          <strong className={titleNumberStyle}>{notificationData?.contents.length}</strong>개
        </div>
        {notificationData?.contents.length === 0 ? (
          <p className={emptyStyle}>읽지 않은 알림이 없어요.</p>
        ) : (
          <ul className={listStyle}>
            {notificationData?.contents.map(({ id, content, link, createdAt }) => (
              <li className={itemStyle} key={id}>
                <a href={link} className={itemLinkStyle}>
                  <div className={itemTextStyle}>{content}</div>
                  <span className={itemTimeStyle}>{timeForToday(createdAt)}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
