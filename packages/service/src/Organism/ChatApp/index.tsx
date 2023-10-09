import { getUserInfo } from 'auth/utils/userInfo';
import { AxiosError } from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { commonApiWrapper } from '../../api/wrapper/common/commanApiWrapper';
import FloatingButton from '../../Component/Button/FloatingButton';
import { displayNoneStyle } from '../../styles/util.css';
import {
  chatAppStyle,
  chatAppTitleStyle,
  chatBotTooltipStyle,
  messageBotStyle,
  messageFormStyle,
  messageInputStyle,
  messageListStyle,
  messageSubmitButtonStyle,
  messageUserStyle,
} from './style.css';

interface IMessage {
  text: string;
  isUser: boolean;
}

const Message = ({ text, isUser }: IMessage) => (
  <div className={isUser ? messageUserStyle : messageBotStyle}>{text}</div>
);

const MessageList = ({ messages }: { messages: IMessage[] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className={messageListStyle}>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUser={message.isUser} />
      ))}
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

const ChatApp = ({ isShown }: { isShown: boolean }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { mutate } = useMutation<string, AxiosError, string>(commonApiWrapper.postChat, {
    onSuccess: (answer) => {
      setMessages((prev) => [...prev, { text: answer, isUser: false }]);
    },
  });

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);
    mutate(text);
  };

  return (
    <div className={isShown ? chatAppStyle : displayNoneStyle}>
      <p className={chatAppTitleStyle}>챗봇에게 궁금한 점을 물어보세요!</p>
      <MessageList messages={messages} />
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
        ?
      </FloatingButton>
    </>
  );
};

export default ChatBot;
