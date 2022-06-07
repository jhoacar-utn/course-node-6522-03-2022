
const API_URL = '/api/v1/auth';

export const handleLogin = async (email, password) => {

    try {

        const response = await fetch(API_URL + '/login');
        const jsonResponse = response.json();

        if (jsonResponse.error)
            return {
                error: jsonResponse.error
            }

        return {
            success: jsonResponse.message
        }

    } catch (error) {
        console.log(error);
        return {
            error: error
        }

    }
}