import { MessageType } from '../@types';
const server_url = process.env.REACT_APP_SERVER_URL || '';

export const createMessage = async (message: MessageType) => {
  try {
    const result = await fetch(server_url + '/messages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong creating the message');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
