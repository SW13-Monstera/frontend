import sliderImage from '../../../assets/images/slider-image-1.webp';
import computerImage from '../../../assets/images/computer-open-1.webp';
import { URL } from '../../../constants/url';

export const SLIDER_ITEMS = [
  {
    category: '면접 대비 문제 세트',
    title: 'IT 기업 취업 면접 대비 문제 없어요!',
    description: '기술 면접에 꼭 나올 개념들만 모인 문제세트를 풀어보세요.',
    imgSrc: sliderImage,
    link: URL.PROBLEM_SET_LIST,
  },
  {
    category: 'AI 서술형 채점',
    title: 'AI 채점 베타서비스를 확인해보세요!',
    description:
      '서술형 문제를 풀고 AI로 채점받을 수 있어요. 어떤 방식으로 이루어지는지 함께 알아봐요.',
    imgSrc: computerImage,
    link: URL.DESCRIPTION,
  },
];
