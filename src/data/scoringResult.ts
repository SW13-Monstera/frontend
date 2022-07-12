const scoringResult = {
  score: 6.7,
  keywordList: ['키워드1', '키워드4'],
  answerKeywordList: ['Heap', '캐시', '캐쉬'],
  answer:
    '동일한 프로세스 내의 스레드는 Stack을 제외한 나머지 Code, Data, Heap 영역을 공유합니다. 그러므로 A스레드에서 B스레드로 context switching이 일어날 때 먼저 A스레드의 ThreadStack영역을 B스레드의 ThreadStack으로 교체합니다.그리고 멀티스레드의 context switching이 멀티프로세스에 비해 빠른 이유는 Stack영역을 제외한 나머지의 영역을 공유한다는 점도 있지만 추가적으로 캐쉬와도 연관이 있어요.프로세스에서 context switching이 일어나면 캐쉬데이터를 전부 지우고 새로 만들어요. 그러나 스레드간의 context switching은 어차피 자원을 공유하기 때문에 캐시를 갈아 끼울 필요가 없습니다.',
};

export { scoringResult };
