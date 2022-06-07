
const API_URL = '/api/v1/auth';

export const handleLogin = async (email, password) => {

    return 'ok';

    const response = await fetch(API_URL + '/login');
    const jsonResponse = await response.json();

    if (jsonResponse.error)
        throw jsonResponse.error;

    return {
        success: jsonResponse.message
    }
}