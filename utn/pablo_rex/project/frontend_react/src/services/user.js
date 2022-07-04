import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/user";


export const handleDashboard = async (token) => {
  try {

    // const response = await axios.get(AUTH_URL + '/profile', { params: JSON.parse(token) });
    const response = await axios.get(`${AUTH_URL}/profile/${token}`)
    const profile = response.data;

    if (!profile)
      return [];

    return profile.map((element) => {
      return {
        name: element.name,
        image: element.image,
        avatar: element.avatar,
        email: element.email
      }
    })

  } catch (error) {
    console.log(error);
    return [];
  }
}

export const handleAvatar = async () => {
  try {

    const response = await axios.get(AUTH_URL + '/avatar');
    const profile = response.data;

    if (!profile)
      return [];

    return profile.map((element) => {
      return {
        avatar: element.avatar,
      }
    })

  } catch (error) {
    console.log(error);
    return [];
  }
}

