import { footerStyle } from './style.css';
import logo from '../../assets/images/csbroker.png';
import logoWhite from '../../assets/images/csbroker-white.png';

import { useDarkModeStore } from '../../hooks/useStore';
import { Link } from 'react-router-dom';
import { URL } from '../../constants/url';

function Footer() {
  const { isDark } = useDarkModeStore();

  return (
    <footer className={footerStyle}>
      <img src={isDark ? logoWhite : logo} width='100px' />
      <div>
        <div>주소: 서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩 7층(06151)</div>
        <div>문의: monstera.swm13@gmail.com</div>
        <Link to={URL.TERMS_OF_SERVICE}>이용약관 </Link>|
        <Link to={URL.PRIVACY_POLICY}> 개인정보처리방침</Link>
      </div>
    </footer>
  );
}
export default Footer;
