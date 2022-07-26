export type ChatType = {
  id?: string;
  users: UserType[];
  messages: MessageType[];
};

export type MessageType = {
  id?: string;
  content: string;
  chatId: string;
  chat?: ChatType;
  authorId: string;
  author?: UserType;
};

export type UserType = {
  id?: string;
  username: string;
  password: string;
  chats?: ChatType[];
  message?: MessageType[];
};

export type ClassNameType = {
  className?: string;
};
