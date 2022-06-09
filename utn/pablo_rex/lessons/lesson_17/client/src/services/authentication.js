
const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/auth"

export const handleLogin = async (email, password) => {

  // return 'ok';
  const data = { email, password };

  const response = await fetch(AUTH_URL + '/login', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const jsonResponse = await response.json();

  if (jsonResponse.error)
    throw jsonResponse.error;
  const body = jsonResponse.body;
  const { token } = body;

  if (!token)
    throw "Token is required in the login";

  saveToken(token);

  return {
    success: jsonResponse.message
  }
}

export const saveToken = (token) => {
  localStorage.setItem('token', token);
}

export const getToken = () => {
  localStorage.getItem('token');
}