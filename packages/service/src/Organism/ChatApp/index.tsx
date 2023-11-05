import { getUserInfo } from 'auth/utils/userInfo';
import { AxiosError } from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import FloatingButton from '../../Component/Button/FloatingButton';
import { displayNoneStyle } from '../../styles/util.css';
import {
  chatAppStyle,
  chatAppTitleImgStyle,
  chatAppTitleStyle,
  chatBotTooltipStyle,
  ellipsis1Style,
  ellipsis2Style,
  ellipsis3Style,
  ellipsis4Style,
  loadingMessageStyle,
  messageBotStyle,
  messageBotWrapStyle,
  messageFormStyle,
  messageInputStyle,
  messageListStyle,
  messageSubmitButtonStyle,
  messageUserStyle,
  messageUserWrapStyle,
} from './style.css';
import chatgptImg from '../../assets/images/chat-gpt.png';

interface IMessage {
  text: string;
  isUser: boolean;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Message = ({ text, isUser, scrollRef }: IMessage) => {
  const [botText, setBotText] = useState('');

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [botText]);

  useEffect(() => {
    const answer = text;
    let curIdx = 0;

    function write() {
      if (!answer) return;

      setBotText(answer.slice(0, curIdx));
      if (curIdx++ === answer.length) {
        curIdx = 0;
      } else {
        setTimeout(() => {
          write();
        }, 50);
      }
    }
    write();
  }, []);

  return (
    <div className={isUser ? messageUserWrapStyle : messageBotWrapStyle}>
      <div className={isUser ? messageUserStyle : messageBotStyle}>{isUser ? text : botText}</div>
    </div>
  );
};

const MessageList = ({
  messages,
  isLoading,
  scrollRef,
}: {
  messages: IMessage[];
  isLoading: boolean;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={messageListStyle}>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUser={message.isUser} scrollRef={scrollRef} />
      ))}
      {isLoading ? <LoadingMessage /> : <></>}
      <div ref={scrollRef}></div>
    </div>
  );
};

const MessageInput = ({ onSendMessage }: { onSendMessage: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={messageFormStyle}>
      <input
        type='text'
        placeholder='궁금한 점을 입력하세요'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={messageInputStyle}
      />
      <button type='submit' className={messageSubmitButtonStyle}>
        전송
      </button>
    </form>
  );
};

const LoadingMessage = () => {
  return (
    <div className={loadingMessageStyle}>
      <div className={ellipsis1Style}></div>
      <div className={ellipsis2Style}></div>
      <div className={ellipsis3Style}></div>
      <div className={ellipsis4Style}></div>
    </div>
  );
};

const ChatApp = ({ isShown }: { isShown: boolean }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { mutate, isLoading } = useMutation<string, AxiosError, string>(commonApiWrapper.postChat, {
    onSuccess: (answer) => {
      setMessages((prev) => [...prev, { text: answer, isUser: false, scrollRef }]);
    },
  });

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, isUser: true, scrollRef }]);
    mutate(text);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={isShown ? chatAppStyle : displayNoneStyle}>
      <p className={chatAppTitleStyle}>
        <img src={chatgptImg} alt='chatGPT' width='20px' className={chatAppTitleImgStyle} />
        <span>챗봇에게 궁금한 점을 물어보세요!</span>
      </p>
      <MessageList messages={messages} isLoading={isLoading} scrollRef={scrollRef} />

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

const ChatBotTooltip = ({ isShown }: { isShown: boolean }) => {
  return <div className={isShown ? chatBotTooltipStyle : displayNoneStyle}>로그인 후 이용가능</div>;
};

const ChatBot = () => {
  const [isChatShown, setIsChatShow] = useState(false);
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  return (
    <>
      <ChatApp isShown={isChatShown} />
      <ChatBotTooltip isShown={isTooltipShown} />
      <FloatingButton
        onClick={() => {
          const userInfo = getUserInfo();
          if (!userInfo) return;
          setIsChatShow((prev) => !prev);
        }}
        onMouseOver={() => {
          const userInfo = getUserInfo();
          if (userInfo) return;
          setIsTooltipShown(true);
        }}
        onMouseOut={() => {
          const userInfo = getUserInfo();
          if (userInfo) return;
          setIsTooltipShown(false);
        }}
      >
        <img src={chatgptImg} alt='AI 챗봇' width='32px' />
      </FloatingButton>
    </>
  );
};

export default ChatBot;
