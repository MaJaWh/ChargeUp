import { useState } from 'react';

function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const removeToken = () => {
    sessionStorage.removeItem('token');
    setToken(undefined);
  };

  return {
    setToken: saveToken,
    token,
    removeToken,
  };
}

export default useToken;
