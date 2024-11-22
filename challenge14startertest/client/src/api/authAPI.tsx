export interface UserLogin {
  username: string;
  password: string;
}

export const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};