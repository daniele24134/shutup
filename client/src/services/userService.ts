import { UserType } from '../@types';

const server_url = process.env.REACT_APP_SERVER_URL || '';

export const createUser = async (userData: UserType) => {
  try {
    const result = await fetch(server_url + '/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong during the sign up');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const result = await fetch(server_url + `/users/username/${username}`);
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong during the log in');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const result = await fetch(server_url + `/users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      throw new Error('Something went wrong during the log in');
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
