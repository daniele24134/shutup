import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ClassNameType, MessageType } from '../@types';
import { useAppDispatch } from '../app/hooks';
import { unshiftChat } from '../features/user/userSlice';
import { receiveMessage, sendMessage, socket } from '../services/socketService';

interface ChatInputProps extends ClassNameType {
  chatId: string;
  authorId: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  className,
  chatId,
  authorId,
}) => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  useEffect((): any => {
    if (!socket) return;
    socket.on('receive-message', (message: MessageType) => {
      receiveMessage(dispatch, message);
      console.log(message.chat)
      dispatch(unshiftChat(message.chat!))
    });

    return () => socket.off('receive-message');
  }, [socket]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text) {
      const message = {
        content: text,
        chatId,
        authorId,
      };
      sendMessage(dispatch, message);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type='text'
        placeholder='type..'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type='submit' value='Send' />
    </form>
  );
};

export default styled(ChatInput)`
  position: fixed;
  bottom: 0;

  padding: 20px;
  width: 100%;
  height: 80px;
  & input[type='text'] {
    width: 70%;
    border-radius: 10px;
    margin-right: 15px;
    padding: 5px 10px;
    border: solid gray 1px;
  }

  & input[type='submit'] {
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #014301;
    color: white;
    transition: all ease 300ms;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;
