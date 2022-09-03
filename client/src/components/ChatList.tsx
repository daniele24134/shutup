import React, { useEffect, useMemo } from 'react';
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

  let chatlist = user.chats?.map((chat) => <ChatItem key={chat.id} chat={chat} userId={userId} />);

  useEffect(() => {
    console.log(user.chats)
    chatlist = user.chats?.map((chat) => {
      return <ChatItem key={chat.id} chat={chat} userId={userId} />;
    });
  }, [user.chats])


  const nochat = <div>You have no chat yet</div>;

  return (
    <ul className={className}>{user.chats?.length ? chatlist : nochat}</ul>
  );
};

export default styled(ChatList)`
  overflow-y: auto;
  width: 100%;
`;
