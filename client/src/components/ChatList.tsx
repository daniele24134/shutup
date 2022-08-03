import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import ChatItem from './ChatItem';
import { receiveChat, socket } from '../services/socketService';
import { ChatType } from '../@types';

type ChatLisType = {
  className?: string;
  userId: string;
};

const ChatList: React.FC<ChatLisType> = ({ className, userId }) => {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  useEffect((): any => {
    if (!socket) return;
    socket.on('receive-chat', (chat: ChatType) => {
      receiveChat(dispatch, chat);
    });

    return () => socket.off('receive-chat');
  }, [socket]);

  const chatlist = user.chats?.map((chat) => {
    return <ChatItem key={chat.id} chat={chat} userId={userId} />;
  });

  const nochat = <div>You have no chat yet</div>;

  return (
    <ul className={className}>{user.chats?.length ? chatlist : nochat}</ul>
  );
};

export default styled(ChatList)`
  overflow-y: auto;
  width: 100%;
`;
