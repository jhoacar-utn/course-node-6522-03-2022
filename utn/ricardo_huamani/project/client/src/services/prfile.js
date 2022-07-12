import axios from 'axios';
import { getDashboardEmail } from '../services/authentication'
const API_URL = process.env.REACT_APP_API_URL || '/api/v1';

const AUTH_URL = API_URL + "/dashboard";

export const handleDashboard_old = async () => {

  const data = getDashboardEmail();
  console.log(data);
  // Las peticiones por post, put, patch se le especifica por primer parametro
  // la URL a donde envia la informacion y segundo parametro la informacion a enviar
  const response = await axios.get(AUTH_URL + '/dashboard', data);
  const jsonResponse = response.data;  // El atributo .data contendra toda la informacion que se extrajo de la peticion

  if (jsonResponse.error)
    throw jsonResponse.error;

  const body = jsonResponse.body;
  const { email, name, avatar, image } = body;

  // if (!token)
  //   throw "Token is required in the login";



  return {
    success: jsonResponse.message
  }
}