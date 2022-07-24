const server_url = process.env.REACT_APP_SERVER_URL || '';

export const createChat = async (ids: string[]) => {
  try {
    const result = await fetch(server_url + '/chats', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(ids),
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong creating the chat');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteChat = async (id: string) => {
  try {
    const result = await fetch(server_url + '/chats/' + id, {
      method: 'DELETE',
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong deleting the chat');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getChat = async (id: string) => {
  try {
    const result = await fetch(server_url + '/chats/' + id);
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong fetching the chat');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
