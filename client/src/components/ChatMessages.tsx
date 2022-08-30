import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ClassNameType, MessageType } from '../@types';
import MessageItem from './MessageItem';

interface ChatMessagesProps extends ClassNameType {
  messages: MessageType[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ className, messages }) => {
  const lastMessage = useRef(messages[messages.length - 1]);
  const chatRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current?.scrollHeight });
  }, [messages]);

  return (
    <ul ref={chatRef} className={className}>
      {messages.map((message) => (
        <MessageItem message={message} key={message.id} />
      ))}
    </ul>
  );
};

export default styled(ChatMessages)`
  padding: 30px;
  height: 70vh;
  overflow-y: auto;

`;
