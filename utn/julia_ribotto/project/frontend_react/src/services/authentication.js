import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || "/api/v1";
const AUTH_URL = API_URL + "/auth";
const USER_URL = API_URL + "/user";

export const handleRegister = async (userData) => {

    //console.log(userData)
    const response = await axios.post(AUTH_URL + "/register", userData);
    const jsonResponse = response.data;

    //console.log(jsonResponse)

    if(jsonResponse.error) {
        throw jsonResponse.error;
    }

    return {
        success: jsonResponse.message
    }
}

export const handleLogin = async (email, password) => {

    const data = {email, password};
    
    const response = await axios.post(AUTH_URL + '/login', data);

    const jsonResponse = response.data;

    if (jsonResponse.error) {

        throw jsonResponse.error;
    }

    const body = jsonResponse.body;

    const {token} = body;

    if (!token) {
        throw "Token is missing";
    }

    saveToken(token);

    return {
        message: jsonResponse.message
    }
}



//TODO ../api/v1/user/profile+token
/*export const handleProfile = async (token) => {

    //let token = localStorage.getItem('token');
    //console.log(token)

    try {
        
        const response = await axios.get(USER_URL+'/profile',{
            params: {
                token: token
            }
        });

        const userProfile = response.data;

        return {
            name: userProfile.name,
            image: userProfile.image,
            avatar: userProfile.avatar,
            email: userProfile.email
        }

    } catch (error) {
        console.log(error);
        return {
            error: error
        }
    }
};

*/
export const saveToken = (token) => {
    localStorage.setItem('token',token);
};

export const getToken = () => {
    localStorage.getItem('token');
}