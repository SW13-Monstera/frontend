import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextButton } from '../../../Component/Button';
import { URL } from '../../../constants/url';
import { BUTTON_SIZE, BUTTON_THEME } from '../../../types/button';
import { pageWrapperStyle } from '../../MainPage/style.css';
import { MetaTag } from '../../utils/MetaTag';

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast('앗! 에러가 발생했어요🥲');
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <>
      <MetaTag title='오류 발생' />
      <>
        <div className={pageWrapperStyle}>
          <TextButton
            theme={BUTTON_THEME.PRIMARY}
            size={BUTTON_SIZE.MEDIUM}
            onClick={() => {
              navigate(URL.MAIN);
            }}
          >
            홈으로 가기
          </TextButton>
        </div>
      </>
    </>
  );
};
