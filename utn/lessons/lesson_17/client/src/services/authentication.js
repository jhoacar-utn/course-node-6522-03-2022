
const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/auth";

export const handleLogin = async (email, password) => {

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

    return {
        success: jsonResponse.message
    }
}