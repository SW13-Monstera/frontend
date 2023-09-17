import React, { FormEvent, useEffect, useRef, useState } from 'react';
import FloatingButton from '../../Component/Button/FloatingButton';
import { displayNoneStyle } from '../../styles/util.css';
import {
  chatAppStyle,
  chatAppTitleStyle,
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

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: '안녕하세요! 저는 챗봇입니다.', isUser: false }]);
    }, 3000);
  };

  return (
    <div className={isShown ? chatAppStyle : displayNoneStyle}>
      <p className={chatAppTitleStyle}>챗봇에게 궁금한 점을 물어보세요!</p>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

const ChatBot = () => {
  const [isShown, setIsShow] = useState(false);
  return (
    <>
      <ChatApp isShown={isShown} />
      <FloatingButton
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      >
        ?
      </FloatingButton>
    </>
  );
};

export default ChatBot;
